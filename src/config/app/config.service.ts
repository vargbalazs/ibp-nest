import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<Config>('app').name;
  }

  get env(): string {
    return this.configService.get<Config>('app').env;
  }

  get url(): string {
    return this.configService.get<Config>('app').url;
  }

  get port(): number {
    return this.configService.get<Config>('app').port;
  }
}
