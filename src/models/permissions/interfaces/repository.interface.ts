import { BaseRepository } from 'src/models/base-repository.interface';
import { PermissionModel } from '../entities/permission.entity';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';

export interface PermissionModelRepository
  extends BaseRepository<
    PermissionModel,
    CreatePermissionDto,
    UpdatePermissionDto
  > {
  assignToRole(permissionId: number, roleId: number): Promise<boolean>;

  removeFromRole(permissionId: number, roleId: number): Promise<boolean>;

  findPermissionWithRoles(permissionId: number): Promise<PermissionModel>;

  findPermissionsWithDetails(): Promise<PermissionModel[]>;
}

export const PermissionModelRepository = Symbol('PermissionModelRepository');
