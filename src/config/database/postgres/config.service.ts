import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<Config>('postgres').host;
  }

  get database(): string {
    return this.configService.get<Config>('postgres').database;
  }

  get user(): string {
    return this.configService.get<Config>('postgres').user;
  }

  get password(): string {
    return this.configService.get<Config>('postgres').password;
  }

  get port(): number {
    return this.configService.get<Config>('postgres').port;
  }

  get ssl(): string {
    return this.configService.get<Config>('postgres').ssl;
  }

  get endpoindId(): string {
    return this.configService.get<Config>('postgres').endpointId;
  }
}
