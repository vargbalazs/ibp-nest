import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';
import { OrmConfigModule } from 'src/config/orm/config.module';
import { OrmConfigService } from 'src/config/orm/config.service';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule, OrmConfigModule],
      useFactory: async (
        postgresConfigService: PostgresConfigService,
        ormConfigService: OrmConfigService,
      ) => ({
        type: ormConfigService.databaseType as DatabaseType,
        host: postgresConfigService.host,
        port: postgresConfigService.port,
        username: postgresConfigService.user,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        ssl: postgresConfigService.ssl,
        logging: ormConfigService.logging,
        synchronize: ormConfigService.synchronize,
      }),
      inject: [PostgresConfigService, OrmConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresProviderModule {}
