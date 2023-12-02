import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Bu } from '../interfaces/bu.interface';

@Entity({ name: 'bus', synchronize: false })
export class BuModel implements Bu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
