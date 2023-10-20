import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupService } from './role-groups.service';
import { RoleGroupController } from './role-groups.controller';
import { RoleGroupRepository } from './role-groups.repository';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { RoleGroupEntity } from './serializers/role-group.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([RoleGroupModel])],
  providers: [
    RoleGroupService,
    { provide: ENTITY, useValue: RoleGroupModel },
    { provide: RoleGroupModelRepository, useClass: RoleGroupRepository },
    { provide: SERIALIZER, useValue: RoleGroupEntity },
  ],
  controllers: [RoleGroupController],
})
export class RoleGroupsModule {}
