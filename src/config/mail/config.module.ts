import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { MailConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/${process.env.NODE_ENV.trim()}.env`,
      load: [config],
      isGlobal: true,
    }),
  ],
  providers: [MailConfigService],
  exports: [MailConfigService],
})
export class MailConfigModule {}
