import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PermissionService } from './permissions.service';
import { PermissionEntity } from './serializers/permission.serializer';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { AssignToRoleDto } from './dto/assign-to-role.dto';
import { RemoveFromRoleDto } from './dto/remove-from-role.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('permissions')
@RequirePermissions(AdminPermissions.ADMIN)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('with-details')
  async getPermissionsWithDetails(): Promise<PermissionEntity[]> {
    const permissions =
      await this.permissionService.getPermissionsWithDetails();
    return permissions.map((permission) => new PermissionEntity(permission));
  }

  @Get('permission-with-roles/:permissionId')
  async getPermissionWithRoles(
    @Param('permissionId') permissionId: number,
  ): Promise<PermissionEntity> {
    return new PermissionEntity(
      await this.permissionService.getPermissionWithRoles(permissionId),
    );
  }

  @Get()
  async getPermissions(): Promise<PermissionEntity[]> {
    const permissions = await this.permissionService.findAll();
    return permissions.map((permission) => new PermissionEntity(permission));
  }

  @Get(':permissionId')
  async getPermission(
    @Param('permissionId') permissionId: number,
  ): Promise<PermissionEntity> {
    return new PermissionEntity(
      await this.permissionService.findById(permissionId),
    );
  }

  @Post()
  async create(
    @Body() createPermissionDto: CreatePermissionDto,
  ): Promise<PermissionEntity> {
    return new PermissionEntity(
      await this.permissionService.createEntity(createPermissionDto),
    );
  }

  @Post('assign-to-role')
  async assignToRole(
    @Body() assignToRoleDto: AssignToRoleDto,
  ): Promise<boolean> {
    return await this.permissionService.assignToRole(
      assignToRoleDto.permissionId,
      assignToRoleDto.roleId,
    );
  }

  @Post('remove-from-role')
  async removeFromRole(
    @Body() removeFromRoleDto: RemoveFromRoleDto,
  ): Promise<boolean> {
    return await this.permissionService.removeFromRole(
      removeFromRoleDto.permissionId,
      removeFromRoleDto.roleId,
    );
  }

  @Put(':permissionId')
  async update(
    @Param('permissionId') permissionId: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ): Promise<PermissionEntity> {
    return new PermissionEntity(
      await this.permissionService.updateEntity(
        permissionId,
        updatePermissionDto,
      ),
    );
  }

  @Delete(':permissionId')
  async delete(@Param('permissionId') permissionId: number): Promise<number> {
    return this.permissionService.deleteEntity(permissionId);
  }
}
