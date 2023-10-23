import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from './entities/role.entity';
import { RoleService } from './roles.service';
import { RoleController } from './roles.controller';
import { RoleRepository } from './roles.repository';
import { RoleModelRepository } from './interfaces/repository.interface';
import { RoleEntity } from './serializers/role.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([RoleModel])],
  providers: [
    RoleService,
    { provide: ENTITY, useValue: RoleModel },
    { provide: RoleModelRepository, useClass: RoleRepository },
    { provide: SERIALIZER, useValue: RoleEntity },
  ],
  controllers: [RoleController],
})
export class RolesModule {}
