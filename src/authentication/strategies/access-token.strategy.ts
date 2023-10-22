import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private jwtConfigService: JwtConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfigService.accessSecret,
    });
  }

  async validate(payload: JwtPayload) {
    return payload;
  }
}
