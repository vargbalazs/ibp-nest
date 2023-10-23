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

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

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
  async delete(@Param('roleId') roleId: number): Promise<boolean> {
    return this.roleService.deleteEntity(roleId);
  }
}
