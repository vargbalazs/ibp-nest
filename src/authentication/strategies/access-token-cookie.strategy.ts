import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Request } from 'express';
import { Cookie } from '../interfaces/cookie.interface';

@Injectable()
export class AccessTokenCookieStrategy extends PassportStrategy(
  Strategy,
  'jwt-cookie',
) {
  constructor(private jwtConfigService: JwtConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        AccessTokenCookieStrategy.extractJwtFromCookie,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtConfigService.accessSecret,
    });
  }

  async validate(payload: JwtPayload) {
    return payload;
  }

  private static extractJwtFromCookie(req: Request): string | null {
    const cookie = req.cookies as Cookie;
    if (cookie && 'accessToken' in cookie && cookie.accessToken.length > 0) {
      return cookie.accessToken;
    }

    return null;
  }
}
