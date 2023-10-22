import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get accessSecret(): string {
    return this.configService.get<Config>('jwt').accessSecret;
  }

  get accessExpiresIn(): string {
    return this.configService.get<Config>('jwt').accessExpiresIn;
  }

  get refreshSecret(): string {
    return this.configService.get<Config>('jwt').refreshSecret;
  }

  get refreshExpiresIn(): string {
    return this.configService.get<Config>('jwt').refreshExpiresIn;
  }
}
