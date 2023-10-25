import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Action } from '../interfaces/action.interface';

@Entity({ name: 'actions', synchronize: false })
export class ActionModel implements Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
