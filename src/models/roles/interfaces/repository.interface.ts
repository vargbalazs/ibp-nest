import { BaseRepository } from 'src/models/base-repository.interface';
import { RoleModel } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleGroupModel } from 'src/models/role-groups/entities/role-group.entity';

export interface RoleModelRepository
  extends BaseRepository<RoleModel, CreateRoleDto, UpdateRoleDto> {
  assignToRoleGroup(
    roleId: number,
    roleGroup: RoleGroupModel,
  ): Promise<boolean>;

  removeFromRoleGroup(
    roleId: number,
    roleGroup: RoleGroupModel,
  ): Promise<boolean>;

  findRoleWithRoleGroups(roleId: number): Promise<RoleModel>;
}

export const RoleModelRepository = Symbol('RoleModelRepository');
