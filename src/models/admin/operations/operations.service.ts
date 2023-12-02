import { Inject, Injectable } from '@nestjs/common';
import { OperationModel } from './entities/operation.entity';
import { OperationModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Injectable()
export class OperationService extends BaseService<
  OperationModel,
  CreateOperationDto,
  UpdateOperationDto
> {
  constructor(
    @Inject(OperationModelRepository)
    private readonly operationRepository: OperationModelRepository,
  ) {
    super(operationRepository);
  }

  async findOperationsWithPermissions(): Promise<OperationModel[]> {
    return this.operationRepository.findAllWithPermissions();
  }

  async findOperationsWithSubModules(): Promise<OperationModel[]> {
    return this.operationRepository.findAllWithSubModules();
  }

  async findOperationDetails(operationId: number): Promise<OperationModel> {
    return this.operationRepository.findOperationDetails(operationId);
  }
}
