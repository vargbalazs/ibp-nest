import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModel } from './entities/permission.entity';
import { PermissionService } from './permissions.service';
import { PermissionController } from './permissions.controller';
import { PermissionRepository } from './permissions.repository';
import { PermissionModelRepository } from './interfaces/repository.interface';
import { PermissionEntity } from './serializers/permission.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionModel])],
  providers: [
    PermissionService,
    { provide: ENTITY, useValue: PermissionModel },
    { provide: PermissionModelRepository, useClass: PermissionRepository },
    { provide: SERIALIZER, useValue: PermissionEntity },
  ],
  controllers: [PermissionController],
})
export class PermissionsModule {}
