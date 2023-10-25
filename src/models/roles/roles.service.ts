import { Inject, Injectable } from '@nestjs/common';
import { RoleModel } from './entities/role.entity';
import { RoleModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
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
    roleGroup: RoleGroupModel,
  ): Promise<boolean> {
    return await this.roleRepository.assignToRoleGroup(roleId, roleGroup);
  }

  async removeFromRoleGroup(
    roleId: number,
    roleGroup: RoleGroupModel,
  ): Promise<boolean> {
    return await this.roleRepository.removeFromRoleGroup(roleId, roleGroup);
  }
}
