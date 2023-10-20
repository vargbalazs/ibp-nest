import { BaseRepository } from 'src/models/base-repository.interface';
import { RoleGroupModel } from '../entities/role-group.entity';
import { CreateRoleGroupDto } from '../dto/create-role-group.dto';
import { UpdateRoleGroupDto } from '../dto/update-role-group.dto';

export interface RoleGroupModelRepository
  extends BaseRepository<
    RoleGroupModel,
    CreateRoleGroupDto,
    UpdateRoleGroupDto
  > {}

export const RoleGroupModelRepository = Symbol('RoleGroupModelRepository');
