import { Inject, Injectable } from '@nestjs/common';
import { RoleModel } from './entities/role.entity';
import { RoleModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleGroupModel } from '../role-groups/entities/role-group.entity';

@Injectable()
export class RoleService extends BaseService<
  RoleModel,
  CreateRoleDto,
  UpdateRoleDto
> {
  constructor(
    @Inject(RoleModelRepository)
    private readonly roleRepository: RoleModelRepository,
  ) {
    super(roleRepository);
  }

  async assignToRoleGroup(
    roleId: number,
    roleGroupId: number,
  ): Promise<boolean> {
    return await this.roleRepository.assignToRoleGroup(roleId, roleGroupId);
  }

  async removeFromRoleGroup(
    roleId: number,
    roleGroupId: number,
  ): Promise<boolean> {
    return await this.roleRepository.removeFromRoleGroup(roleId, roleGroupId);
  }

  async getRoleWithRoleGroups(roleId: number): Promise<RoleModel> {
    return await this.roleRepository.findRoleWithRoleGroups(roleId);
  }

  async getRoleWithPermissions(roleId: number): Promise<RoleModel> {
    return await this.roleRepository.findRoleWithPermissions(roleId);
  }

  async getRolesWithPermissions(): Promise<RoleModel[]> {
    return await this.roleRepository.findRolesWithPermissions();
  }
}
