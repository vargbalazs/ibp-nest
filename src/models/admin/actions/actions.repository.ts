import { ActionModel } from './entities/action.entity';
import { ActionModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../type-orm.repository';

export class ActionRepository
  extends TypeOrmRepository<ActionModel>
  implements ActionModelRepository {}
