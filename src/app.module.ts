import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { ModelsModule } from './models/models.module';
import { AuthModule } from './authentication/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    AppConfigModule,
    PostgresProviderModule,
    ModelsModule,
    AuthModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
