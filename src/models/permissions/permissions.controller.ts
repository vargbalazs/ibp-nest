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

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

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
  async delete(@Param('permissionId') permissionId: number): Promise<boolean> {
    return this.permissionService.deleteEntity(permissionId);
  }
}
