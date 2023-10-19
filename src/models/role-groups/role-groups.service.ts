import { Inject, Injectable } from '@nestjs/common';
import { RoleGroup } from './entities/role-group.entity';
import { IRoleGroupRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateRoleGroupDto } from './dto/create-role-group.dto';
import { UpdateRoleGroupDto } from './dto/update-role-group.dto';

@Injectable()
export class RoleGroupService extends BaseService<
  RoleGroup,
  CreateRoleGroupDto,
  UpdateRoleGroupDto
> {
  constructor(
    @Inject(IRoleGroupRepository)
    private readonly roleGroupRepository: IRoleGroupRepository,
  ) {
    super(roleGroupRepository);
  }
}
