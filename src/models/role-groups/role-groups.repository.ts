import { RoleGroup } from './entities/role-group.entity';
import { IRoleGroupRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class RoleGroupRepository
  extends TypeOrmRepository<RoleGroup>
  implements IRoleGroupRepository {}
