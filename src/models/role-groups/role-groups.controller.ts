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

  @Get()
  async getRoleGroups(): Promise<RoleGroupEntity[]> {
    const roleGroups = await this.roleGroupService.findAll();
    return roleGroups.map((roleGroup) => new RoleGroupEntity(roleGroup));
  }

  @Get(':roleGroupId')
  async getRoleGroup(
    @Param('roleGroupId') roleGroupId: number,
  ): Promise<RoleGroupEntity> {
    return new RoleGroupEntity(
      await this.roleGroupService.findById(roleGroupId),
    );
  }

  @Post()
  async create(
    @Body() createRoleGroupDto: CreateRoleGroupDto,
  ): Promise<RoleGroupEntity> {
    return new RoleGroupEntity(
      await this.roleGroupService.createEntity(createRoleGroupDto),
    );
  }

  @Put(':roleGroupId')
  async update(
    @Param('roleGroupId') roleGroupId: number,
    @Body() updateRoleGroupDto: UpdateRoleGroupDto,
  ): Promise<RoleGroupEntity> {
    return new RoleGroupEntity(
      await this.roleGroupService.updateEntity(roleGroupId, updateRoleGroupDto),
    );
  }

  @Delete(':roleGroupId')
  async delete(@Param('roleGroupId') roleGroupId: number): Promise<boolean> {
    return this.roleGroupService.deleteEntity(roleGroupId);
  }
}
