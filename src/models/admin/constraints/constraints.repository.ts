import { ConstraintModel } from './entities/constraint.entity';
import { ConstraintModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../base/type-orm.repository';

export class ConstraintRepository
  extends TypeOrmRepository<ConstraintModel>
  implements ConstraintModelRepository {}
