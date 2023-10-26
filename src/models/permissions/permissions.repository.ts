import { PermissionModel } from './entities/permission.entity';
import { PermissionModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class PermissionRepository
  extends TypeOrmRepository<PermissionModel>
  implements PermissionModelRepository {}
