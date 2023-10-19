import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleGroup } from './entities/role-group.entity';
import { RoleGroupService } from './role-groups.service';
import { RoleGroupController } from './role-groups.controller';
import { RoleGroupRepository } from './role-groups.repository';
import { IRoleGroupRepository } from './interfaces/repository.interface';
import { RoleGroupEntity } from './serializers/role-group.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([RoleGroup])],
  providers: [
    RoleGroupService,
    { provide: ENTITY, useValue: RoleGroup },
    { provide: IRoleGroupRepository, useClass: RoleGroupRepository },
    { provide: SERIALIZER, useValue: RoleGroupEntity },
  ],
  controllers: [RoleGroupController],
})
export class RoleGroupsModule {}
