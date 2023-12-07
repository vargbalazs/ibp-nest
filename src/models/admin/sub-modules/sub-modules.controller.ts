import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubModuleService } from './sub-modules.service';
import { SubModuleEntity } from './serializers/sub-module.serializer';
import { CreateSubModuleDto } from './dto/create-sub-module.dto';
import { UpdateSubModuleDto } from './dto/update-sub-module.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('sub-modules')
@RequirePermissions(AdminPermissions.ADMIN)
export class SubModuleController {
  constructor(private readonly subModuleService: SubModuleService) {}

  @Get('with-operations/:subModuleId')
  async getSubModuleWithOperations(
    @Param('subModuleId') subModuleId: number,
  ): Promise<SubModuleEntity> {
    return new SubModuleEntity(
      await this.subModuleService.getSubModuleWithOperations(subModuleId),
    );
  }

  @Get()
  async getSubModules(): Promise<SubModuleEntity[]> {
    const subModules = await this.subModuleService.findAll();
    return subModules.map((subModule) => new SubModuleEntity(subModule));
  }

  @Get(':subModuleId')
  async getSubModule(
    @Param('subModuleId') subModuleId: number,
  ): Promise<SubModuleEntity> {
    return new SubModuleEntity(
      await this.subModuleService.findById(subModuleId),
    );
  }

  @Post()
  async create(
    @Body() createSubModuleDto: CreateSubModuleDto,
  ): Promise<SubModuleEntity> {
    return new SubModuleEntity(
      await this.subModuleService.createEntity(createSubModuleDto),
    );
  }

  @Put(':subModuleId')
  async update(
    @Param('subModuleId') subModuleId: number,
    @Body() updateSubModuleDto: UpdateSubModuleDto,
  ): Promise<SubModuleEntity> {
    return new SubModuleEntity(
      await this.subModuleService.updateEntity(subModuleId, updateSubModuleDto),
    );
  }

  @Delete(':subModuleId')
  async delete(@Param('subModuleId') subModuleId: number): Promise<number> {
    return this.subModuleService.deleteEntity(subModuleId);
  }
}
