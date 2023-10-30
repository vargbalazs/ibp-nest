import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { Cookie } from '../interfaces/cookie.interface';

@Injectable()
export class RefreshTokenCookieStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-cookie',
) {
  constructor(private jwtConfigService: JwtConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        RefreshTokenCookieStrategy.extractJwtFromCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConfigService.refreshSecret,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: any) {
    const refreshToken = (req.cookies as Cookie).refreshToken;
    return { ...payload, refreshToken };
  }

  private static extractJwtFromCookie(req: Request): string | null {
    const cookie = req.cookies as Cookie;
    if (cookie && 'refreshToken' in cookie && cookie.refreshToken.length > 0) {
      return cookie.refreshToken;
    }

    return null;
  }
}
