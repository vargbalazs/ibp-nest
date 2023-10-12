import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { PostgresConfigModule } from './config/database/postgres/config.module';

@Module({
  imports: [AppConfigModule, PostgresConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
