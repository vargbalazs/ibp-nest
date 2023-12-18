import { CustomerModel } from '../../customers/entities/customer.entitiy';

export interface Project {
  id: number;
  name: string;
  customer: CustomerModel;
}
