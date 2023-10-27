import { Inject, Injectable } from '@nestjs/common';
import { SubModuleModel } from './entities/sub-module.entity';
import { SubModuleModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateSubModuleDto } from './dto/create-sub-module.dto';
import { UpdateSubModuleDto } from './dto/update-sub-module.dto';

@Injectable()
export class SubModuleService extends BaseService<
  SubModuleModel,
  CreateSubModuleDto,
  UpdateSubModuleDto
> {
  constructor(
    @Inject(SubModuleModelRepository)
    private readonly subModuleRepository: SubModuleModelRepository,
  ) {
    super(subModuleRepository);
  }

  async getSubModuleWithOperations(
    subModuleId: number,
  ): Promise<SubModuleModel> {
    return this.subModuleRepository.findSubModuleWithOperations(subModuleId);
  }
}
