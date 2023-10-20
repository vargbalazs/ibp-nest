import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config.interface';

@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get secret(): string {
    return this.configService.get<Config>('jwt').secret;
  }

  get expiresIn(): string {
    return this.configService.get<Config>('jwt').expiresIn;
  }
}
