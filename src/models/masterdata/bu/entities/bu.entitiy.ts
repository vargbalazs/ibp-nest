import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bu } from '../interfaces/bu.interface';
import { CustomerModel } from '../../customers/entities/customer.entitiy';

@Entity({ name: 'bus', synchronize: false })
export class BuModel implements Bu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CustomerModel, (customer) => customer.bu)
  customers: CustomerModel[];
}
