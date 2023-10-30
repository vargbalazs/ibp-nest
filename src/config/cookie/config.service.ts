import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class CookieConfigService {
  constructor(private configService: ConfigService) {}

  get maxAge(): number {
    return this.configService.get<Config>('cookie').maxAge;
  }

  get httpOnly(): boolean {
    return this.configService.get<Config>('cookie').httpOnly;
  }

  get secure(): boolean {
    return this.configService.get<Config>('cookie').secure;
  }

  get sameSite(): string {
    return this.configService.get<Config>('cookie').sameSite;
  }
}
