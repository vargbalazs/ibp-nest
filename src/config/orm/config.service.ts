import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class OrmConfigService {
  constructor(private configService: ConfigService) {}

  get logging(): string {
    return this.configService.get<Config>('orm').logging;
  }

  get synchronize(): boolean {
    return this.configService.get<Config>('orm').synchronize;
  }

  get databaseType(): string {
    return this.configService.get<Config>('orm').databaseType;
  }

  get autoLoadEntities(): boolean {
    return this.configService.get<Config>('orm').autoLoadEntities;
  }
}
