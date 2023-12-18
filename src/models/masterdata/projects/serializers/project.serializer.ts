import { CustomerModel } from '../../customers/entities/customer.entitiy';
import { Project } from '../interfaces/project.interface';

export class ProjectEntity implements Project {
  constructor(partial: Partial<ProjectEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  customer: CustomerModel;
}
