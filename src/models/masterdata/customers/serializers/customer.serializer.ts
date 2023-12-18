import { BuModel } from '../../bu/entities/bu.entitiy';
import { Customer } from '../interfaces/customer.interface';

export class CustomerEntity implements Customer {
  constructor(partial: Partial<CustomerEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  code: string;
  bu: BuModel;
}
