import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [config],
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
