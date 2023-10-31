import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class CookieConfigService {
  constructor(private configService: ConfigService) {}

  get maxAgeAccessToken(): number {
    return this.configService.get<Config>('cookie').maxAgeAccessToken;
  }

  get maxAgeRefreshToken(): number {
    return this.configService.get<Config>('cookie').maxAgeRefreshToken;
  }

  get httpOnly(): boolean {
    return this.configService.get<Config>('cookie').httpOnly;
  }

  get secure(): boolean {
    return this.configService.get<Config>('cookie').secure;
  }

  get sameSite(): boolean | 'lax' | 'strict' | 'none' {
    return this.configService.get<Config>('cookie').sameSite;
  }
}
