import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../interfaces/customer.interface';
import { BuModel } from '../../bu/entities/bu.entitiy';
import { ProjectModel } from '../../projects/entities/project.entitiy';

@Entity({ name: 'customers', synchronize: false })
export class CustomerModel implements Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @ManyToOne(() => BuModel, (bu) => bu.customers, {
    nullable: false,
    eager: true,
  })
  bu: BuModel;

  @OneToMany(() => ProjectModel, (project) => project.customer)
  projects: ProjectModel[];
}
