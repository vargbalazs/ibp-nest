import { BaseRepository } from 'src/models/base-repository.interface';
import { OperationModel } from '../entities/operation.entity';
import { CreateOperationDto } from '../dto/create-operation.dto';
import { UpdateOperationDto } from '../dto/update-operation.dto';

export interface OperationModelRepository
  extends BaseRepository<
    OperationModel,
    CreateOperationDto,
    UpdateOperationDto
  > {
  findAllWithPermissions(): Promise<OperationModel[]>;

  findAllWithSubModules(): Promise<OperationModel[]>;

  findOperationDetails(operationId: number): Promise<OperationModel>;
}

export const OperationModelRepository = Symbol('OperationModelRepository');
