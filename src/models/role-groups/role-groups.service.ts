import { Inject, Injectable } from '@nestjs/common';
import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
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
}
