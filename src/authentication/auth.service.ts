import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/models/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtConfigService } from 'src/config/jwt/config.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private jwtConfigService: JwtConfigService,
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

    // const accessToken = await this.jwtService.signAsync(payload);
    // const refreshToken = await this.jwtService.signAsync(payload, {
    //   secret: this.jwtConfigService.refreshSecret,
    //   expiresIn: this.jwtConfigService.refreshExpiresIn,
    // });

    const tokens = await this.getTokens(payload);

    await this.updateRefreshToken(user.userId, tokens.refreshToken);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
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
      throw new ForbiddenException('Access Denied');

    const refreshTokenMatches = await bcryptjs.compare(
      refreshToken,
      user.refreshToken,
    );

    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');

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
    const hashedRefreshToken = await bcryptjs.hash(refreshToken, 10);
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
}
