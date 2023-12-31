import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleEntity } from './serializers/role.serializer';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignToRoleGroupDto } from './dto/assign-to-rolegroup.dto';
import { RemoveFromRoleGroupDto } from './dto/remove-from-rolegroup.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('roles')
@RequirePermissions(AdminPermissions.ADMIN)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('role-with-rolegroups/:roleId')
  async getRoleWithRoleGroups(
    @Param('roleId') roleId: number,
  ): Promise<RoleEntity> {
    return new RoleEntity(await this.roleService.getRoleWithRoleGroups(roleId));
  }

  @Get('role-with-permissions/:roleId')
  async getRoleWithPermissions(
    @Param('roleId') roleId: number,
  ): Promise<RoleEntity> {
    return new RoleEntity(
      await this.roleService.getRoleWithPermissions(roleId),
    );
  }

  @Get('roles-with-permissions')
  async getRolesWithPermissions(): Promise<RoleEntity[]> {
    const roles = await this.roleService.getRolesWithPermissions();
    return roles.map((role) => new RoleEntity(role));
  }

  @Get()
  async getRoles(): Promise<RoleEntity[]> {
    const roles = await this.roleService.findAll();
    return roles.map((role) => new RoleEntity(role));
  }

  @Get(':roleId')
  async getRole(@Param('roleId') roleId: number): Promise<RoleEntity> {
    return new RoleEntity(await this.roleService.findById(roleId));
  }

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return new RoleEntity(await this.roleService.createEntity(createRoleDto));
  }

  @Post('assign-to-rolegroup')
  async assignToRoleGroup(
    @Body() assignToRoleGroupDto: AssignToRoleGroupDto,
  ): Promise<boolean> {
    return await this.roleService.assignToRoleGroup(
      assignToRoleGroupDto.roleId,
      assignToRoleGroupDto.roleGroupId,
    );
  }

  @Post('remove-from-rolegroup')
  async removeFromRoleGroup(
    @Body() removeFromRoleGroupDto: RemoveFromRoleGroupDto,
  ): Promise<boolean> {
    return await this.roleService.removeFromRoleGroup(
      removeFromRoleGroupDto.roleId,
      removeFromRoleGroupDto.roleGroupId,
    );
  }

  @Put(':roleId')
  async update(
    @Param('roleId') roleId: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<RoleEntity> {
    return new RoleEntity(
      await this.roleService.updateEntity(roleId, updateRoleDto),
    );
  }

  @Delete(':roleId')
  async delete(@Param('roleId') roleId: number): Promise<number> {
    return this.roleService.deleteEntity(roleId);
  }
}
