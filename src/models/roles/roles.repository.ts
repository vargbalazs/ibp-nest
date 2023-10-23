import { RoleModel } from './entities/Role.entity';
import { RoleModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class RoleRepository
  extends TypeOrmRepository<RoleModel>
  implements RoleModelRepository {}
