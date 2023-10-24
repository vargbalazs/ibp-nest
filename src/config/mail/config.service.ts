import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class MailConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<Config>('mail').host;
  }

  get user(): string {
    return this.configService.get<Config>('mail').user;
  }

  get password(): string {
    return this.configService.get<Config>('mail').password;
  }

  get from(): string {
    return this.configService.get<Config>('mail').from;
  }
}
