import { OperationModel } from './entities/operation.entity';
import { OperationModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class OperationRepository
  extends TypeOrmRepository<OperationModel>
  implements OperationModelRepository
{
  async findAllWithPermissions(): Promise<OperationModel[]> {
    return this.find({ relations: { permissions: true } });
  }

  async findAllWithSubModules(): Promise<OperationModel[]> {
    return this.find({ relations: { subModule: true } });
  }

  async findOperationDetails(operationId: number): Promise<OperationModel> {
    return this.findOne({
      where: { id: operationId },
      relations: { subModule: true, permissions: true },
    });
  }
}
