import { Inject, Injectable } from '@nestjs/common';
import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateRoleGroupDto } from './dto/create-role-group.dto';
import { UpdateRoleGroupDto } from './dto/update-role-group.dto';

@Injectable()
export class RoleGroupService extends BaseService<
  RoleGroupModel,
  CreateRoleGroupDto,
  UpdateRoleGroupDto
> {
  constructor(
    @Inject(RoleGroupModelRepository)
    private readonly roleGroupRepository: RoleGroupModelRepository,
  ) {
    super(roleGroupRepository);
  }

  async assignToUser(roleGroupId: number, userId: string): Promise<boolean> {
    return await this.roleGroupRepository.assignToUser(roleGroupId, userId);
  }

  async removeFromUser(roleGroupId: number, userId: string): Promise<boolean> {
    return await this.roleGroupRepository.removeFromUser(roleGroupId, userId);
  }

  async getRoleGroupWithUsers(roleGroupId: number): Promise<RoleGroupModel> {
    return await this.roleGroupRepository.findRoleGroupWithUsers(roleGroupId);
  }

  async getRoleGroupsWithPermissions(): Promise<RoleGroupModel[]> {
    return await this.roleGroupRepository.findRoleGroupsWithPermissions();
  }

  async assignToRoute(roleGroupId: number, routeId: number): Promise<boolean> {
    return await this.roleGroupRepository.assignToRoute(roleGroupId, routeId);
  }

  async removeFromRoute(
    roleGroupId: number,
    routeId: number,
  ): Promise<boolean> {
    return await this.roleGroupRepository.removeFromRoute(roleGroupId, routeId);
  }
}
