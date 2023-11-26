import { RouteModel } from './entities/route.entity';
import { RouteModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class RouteRepository
  extends TypeOrmRepository<RouteModel>
  implements RouteModelRepository {}
