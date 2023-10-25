import { ModuleModel } from './entities/module.entity';
import { ModuleModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class ModuleRepository
  extends TypeOrmRepository<ModuleModel>
  implements ModuleModelRepository
{
  async findAllWithSubModules(): Promise<ModuleModel[]> {
    return this.find({ relations: { subModules: true } });
  }
}
