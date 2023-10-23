import { BaseRepository } from 'src/models/base-repository.interface';
import { RoleModel } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

export interface RoleModelRepository
  extends BaseRepository<RoleModel, CreateRoleDto, UpdateRoleDto> {}

export const RoleModelRepository = Symbol('RoleModelRepository');
