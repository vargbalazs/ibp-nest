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
}
