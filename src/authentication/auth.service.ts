import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/models/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtConfigService } from 'src/config/jwt/config.service';
import * as argon2 from 'argon2';
import generator from 'generate-password-ts';
import { EmailNotExistsException } from 'src/common/exceptions/email-not-exists.exception';
import { MailService } from 'src/mail/mail.service';
import { Response } from 'express';
import { CookieConfigService } from 'src/config/cookie/config.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private jwtConfigService: JwtConfigService,
    private mailService: MailService,
    private cookieConfigService: CookieConfigService,
  ) {}

  async login(userEmail: string, password: string) {
    const user = await this.userService.findByUserEmail(userEmail);
    const authenticated = await bcryptjs.compare(
      password,
      user ? user.password : '',
    );

    if (!user || !authenticated) {
      throw new UnauthorizedException('Wrong user email or password');
    }

    const payload: JwtPayload = {
      sub: user.userId,
      username: user.userName,
      useremail: user.userEmail,
    };

    const tokens = await this.getTokens(payload);

    await this.updateRefreshToken(user.userId, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      userId: user.userId,
    };
  }

  async logout(userId: string) {
    return this.userService.updatePartial('userId', userId, {
      refreshToken: null,
    });
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.userService.findByColumn('userId', userId);

    if (!user || !user.refreshToken)
      throw new UnauthorizedException('Access denied');

    // Per bcrypt implementation, only the first 72 bytes of a string are used.
    // Any extra bytes are ignored when matching passwords. Note that this is not the first 72 characters.
    // because of this we use here argon2
    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );

    if (!refreshTokenMatches)
      throw new UnauthorizedException(`Refresh token doesn't match`);

    const payload: JwtPayload = {
      sub: user.userId,
      username: user.userName,
      useremail: user.userEmail,
    };

    const tokens = await this.getTokens(payload);

    await this.updateRefreshToken(user.userId, tokens.refreshToken);

    return tokens;
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    // Per bcrypt implementation, only the first 72 bytes of a string are used.
    // Any extra bytes are ignored when matching passwords. Note that this is not the first 72 characters.
    // because of this we use here argon2
    const hashedRefreshToken = await argon2.hash(refreshToken);
    await this.userService.updatePartial('userId', userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(payload: JwtPayload) {
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.jwtConfigService.refreshSecret,
      expiresIn: this.jwtConfigService.refreshExpiresIn,
    });

    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  async generateNewPassword(userEmail: string): Promise<boolean> {
    const password = generator.generate({
      length: 10,
      numbers: true,
      lowercase: true,
      uppercase: true,
    });

    const hash = await bcryptjs.hash(password, 10);

    const result = await this.userService.updatePartial(
      'userEmail',
      userEmail,
      {
        password: hash,
        firstLogin: true,
      },
    );

    if (result.affected === 0) throw new EmailNotExistsException();

    this.mailService.sendNewPassword(userEmail, password);

    return result.affected > 0;
  }

  storeTokenInCookie(res: Response, accessToken: string, refreshToken: string) {
    res.cookie('accessToken', accessToken, {
      maxAge: this.cookieConfigService.maxAgeAccessToken,
      httpOnly: this.cookieConfigService.httpOnly,
      secure: this.cookieConfigService.secure,
      sameSite: this.cookieConfigService.sameSite,
    });
    res.cookie('refreshToken', refreshToken, {
      maxAge: this.cookieConfigService.maxAgeRefreshToken,
      httpOnly: this.cookieConfigService.httpOnly,
      secure: this.cookieConfigService.secure,
      sameSite: this.cookieConfigService.sameSite,
    });
  }

  clearTokensFromCookie(res: Response) {
    res.cookie('accessToken', '', { expires: new Date(Date.now()) });
    res.cookie('refreshToken', '', { expires: new Date(Date.now()) });
  }
}
