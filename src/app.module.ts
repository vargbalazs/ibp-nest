import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [AppConfigModule, PostgresProviderModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
