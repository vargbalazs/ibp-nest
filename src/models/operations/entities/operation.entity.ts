import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Operation } from '../interfaces/operation.interface';

@Entity({ name: 'operations', synchronize: false })
export class OperationModel implements Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
