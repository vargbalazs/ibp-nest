import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { OrmConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/${process.env.NODE_ENV.trim()}.env`,
      load: [config],
    }),
  ],
  providers: [OrmConfigService],
  exports: [OrmConfigService],
})
export class OrmConfigModule {}
