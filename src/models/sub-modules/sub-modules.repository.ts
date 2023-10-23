import { SubModuleModel } from './entities/sub-module.entity';
import { SubModuleModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class SubModuleRepository
  extends TypeOrmRepository<SubModuleModel>
  implements SubModuleModelRepository {}