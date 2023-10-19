import { IBaseRepository } from 'src/models/base-repository.interface';
import { RoleGroup } from '../entities/role-group.entity';
import { CreateRoleGroupDto } from '../dto/create-role-group.dto';
import { UpdateRoleGroupDto } from '../dto/update-role-group.dto';

export interface IRoleGroupRepository
  extends IBaseRepository<RoleGroup, CreateRoleGroupDto, UpdateRoleGroupDto> {}

export const IRoleGroupRepository = Symbol('IRoleGroupRepository');
