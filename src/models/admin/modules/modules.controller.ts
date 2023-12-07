import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ModuleService } from './modules.service';
import { ModuleEntity } from './serializers/module.serializer';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('modules')
@RequirePermissions(AdminPermissions.ADMIN)
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get('with-submodules')
  async getWithSubmodules(): Promise<ModuleEntity[]> {
    const modules = await this.moduleService.findModulesWithSubModules();
    return modules.map((module) => new ModuleEntity(module));
  }

  @Get('with-submodules/:moduleId')
  async getModuleWithSubmodules(
    @Param('moduleId') moduleId: number,
  ): Promise<ModuleEntity> {
    return new ModuleEntity(
      await this.moduleService.findModuleWithSubModules(moduleId),
    );
  }

  @Get()
  async getModules(): Promise<ModuleEntity[]> {
    const modules = await this.moduleService.findAll();
    return modules.map((module) => new ModuleEntity(module));
  }

  @Get(':moduleId')
  async getModule(@Param('moduleId') moduleId: number): Promise<ModuleEntity> {
    return new ModuleEntity(await this.moduleService.findById(moduleId));
  }

  @Post()
  async create(
    @Body() createModuleDto: CreateModuleDto,
  ): Promise<ModuleEntity> {
    return new ModuleEntity(
      await this.moduleService.createEntity(createModuleDto),
    );
  }

  @Put(':moduleId')
  async update(
    @Param('moduleId') moduleId: number,
    @Body() updateModuleDto: UpdateModuleDto,
  ): Promise<ModuleEntity> {
    return new ModuleEntity(
      await this.moduleService.updateEntity(moduleId, updateModuleDto),
    );
  }

  @Delete(':moduleId')
  async delete(@Param('moduleId') moduleId: number): Promise<number> {
    return this.moduleService.deleteEntity(moduleId);
  }
}
