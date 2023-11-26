import { RouteModel } from './entities/route.entity';
import { RouteModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';
import { FindOptionsWhere } from 'typeorm';

export class RouteRepository
  extends TypeOrmRepository<RouteModel>
  implements RouteModelRepository
{
  override async findAll(): Promise<RouteModel[]> {
    return this.find({
      relations: { roleGroups: true },
      loadEagerRelations: false,
    });
  }

  override async findById(id: number): Promise<RouteModel> {
    return this.findOne({
      where: { id: id },
      relations: { roleGroups: true },
      loadEagerRelations: false,
    });
  }
}
