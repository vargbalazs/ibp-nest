import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../interfaces/project.interface';
import { CustomerModel } from '../../customers/entities/customer.entitiy';

@Entity({ name: 'projects', synchronize: false })
export class ProjectModel implements Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CustomerModel, (customer) => customer.projects, {
    nullable: false,
    eager: true,
  })
  customer: CustomerModel;
}
