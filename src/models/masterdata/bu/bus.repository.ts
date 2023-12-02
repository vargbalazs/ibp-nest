import { BuModel } from './entities/bu.entitiy';
import { BuModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../base/type-orm.repository';

export class BuRepository
  extends TypeOrmRepository<BuModel>
  implements BuModelRepository {}
