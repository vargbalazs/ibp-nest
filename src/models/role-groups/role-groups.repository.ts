import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class RoleGroupRepository
  extends TypeOrmRepository<RoleGroupModel>
  implements RoleGroupModelRepository {}
