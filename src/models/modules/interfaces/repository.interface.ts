import { BaseRepository } from 'src/models/base-repository.interface';
import { ModuleModel } from '../entities/module.entity';
import { CreateModuleDto } from '../dto/create-module.dto';
import { UpdateModuleDto } from '../dto/update-module.dto';

export interface ModuleModelRepository
  extends BaseRepository<ModuleModel, CreateModuleDto, UpdateModuleDto> {}

export const ModuleModelRepository = Symbol('ModuleModelRepository');