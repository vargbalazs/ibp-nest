import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { UsersModule } from './models/users/users.module';
import { RoleGroupsModule } from './models/role-groups/role-groups.module';

@Module({
  imports: [
    AppConfigModule,
    PostgresProviderModule,
    UsersModule,
    RoleGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
