import { Inject, Injectable } from '@nestjs/common';
import { ModuleModel } from './entities/module.entity';
import { ModuleModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModuleService extends BaseService<
  ModuleModel,
  CreateModuleDto,
  UpdateModuleDto
> {
  constructor(
    @Inject(ModuleModelRepository)
    private readonly moduleRepository: ModuleModelRepository,
  ) {
    super(moduleRepository);
  }

  async FindModulesWithSubModules(): Promise<ModuleModel[]> {
    return this.moduleRepository.findAllWithSubModules();
  }
}
