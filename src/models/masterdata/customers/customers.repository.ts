import { CustomerModel } from './entities/customer.entitiy';
import { CustomerModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../base/type-orm.repository';

export class CustomerRepository
  extends TypeOrmRepository<CustomerModel>
  implements CustomerModelRepository {}
