import { BaseRepository } from 'src/models/base-repository.interface';
import { SubModuleModel } from '../entities/sub-module.entity';
import { CreateSubModuleDto } from '../dto/create-sub-module.dto';
import { UpdateSubModuleDto } from '../dto/update-sub-module.dto';

export interface SubModuleModelRepository
  extends BaseRepository<
    SubModuleModel,
    CreateSubModuleDto,
    UpdateSubModuleDto
  > {
  findSubModuleWithOperations(subModuleId: number): Promise<SubModuleModel>;
}

export const SubModuleModelRepository = Symbol('SubModuleModelRepository');
