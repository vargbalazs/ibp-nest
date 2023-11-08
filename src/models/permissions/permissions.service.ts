import { Inject, Injectable } from '@nestjs/common';
import { PermissionModel } from './entities/permission.entity';
import { PermissionModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionService extends BaseService<
  PermissionModel,
  CreatePermissionDto,
  UpdatePermissionDto
> {
  constructor(
    @Inject(PermissionModelRepository)
    private readonly permissionRepository: PermissionModelRepository,
  ) {
    super(permissionRepository);
  }

  async assignToRole(permissionId: number, roleId: number): Promise<boolean> {
    return await this.permissionRepository.assignToRole(permissionId, roleId);
  }

  async removeFromRole(permissionId: number, roleId: number): Promise<boolean> {
    return await this.permissionRepository.removeFromRole(permissionId, roleId);
  }

  async getPermissionWithRoles(permissionId: number): Promise<PermissionModel> {
    return await this.permissionRepository.findPermissionWithRoles(
      permissionId,
    );
  }

  async getPermissionsWithDetails(): Promise<PermissionModel[]> {
    return await this.permissionRepository.findPermissionsWithDetails();
  }
}
