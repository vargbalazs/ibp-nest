import { BaseRepository } from 'src/models/base-repository.interface';
import { RoleModel } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

export interface RoleModelRepository
  extends BaseRepository<RoleModel, CreateRoleDto, UpdateRoleDto> {
  assignToRoleGroup(roleId: number, roleGroupId: number): Promise<boolean>;

  removeFromRoleGroup(roleId: number, roleGroupId: number): Promise<boolean>;

  findRoleWithRoleGroups(roleId: number): Promise<RoleModel>;

  findRoleWithPermissions(roleId: number): Promise<RoleModel>;

  findRolesWithPermissions(): Promise<RoleModel[]>;
}

export const RoleModelRepository = Symbol('RoleModelRepository');
