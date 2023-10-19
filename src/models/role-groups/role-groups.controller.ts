import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoleGroupService } from './role-groups.service';
import { RoleGroupEntity } from './serializers/role-group.serializer';
import { CreateRoleGroupDto } from './dto/create-role-group.dto';
import { UpdateRoleGroupDto } from './dto/update-role-group.dto';

@Controller('role-groups')
export class RoleGroupController {
  constructor(private readonly roleGroupService: RoleGroupService) {}

  @Post()
  async create(
    @Body() createRoleGroupDto: CreateRoleGroupDto,
  ): Promise<RoleGroupEntity> {
    return new RoleGroupEntity(
      await this.roleGroupService.createEntity(createRoleGroupDto),
    );
  }
}
