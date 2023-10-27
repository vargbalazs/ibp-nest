import { BaseRepository } from 'src/models/base-repository.interface';
import { RoleGroupModel } from '../entities/role-group.entity';
import { CreateRoleGroupDto } from '../dto/create-role-group.dto';
import { UpdateRoleGroupDto } from '../dto/update-role-group.dto';

export interface RoleGroupModelRepository
  extends BaseRepository<
    RoleGroupModel,
    CreateRoleGroupDto,
    UpdateRoleGroupDto
  > {
  assignToUser(roleGroupId: number, userId: string): Promise<boolean>;

  removeFromUser(roleGroupId: number, userId: string): Promise<boolean>;

  findRoleGroupWithUsers(roleGroupId: number): Promise<RoleGroupModel>;
}

export const RoleGroupModelRepository = Symbol('RoleGroupModelRepository');
