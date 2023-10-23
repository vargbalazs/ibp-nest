import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Module } from '../interfaces/module.interface';

@Entity({ name: 'modules', synchronize: false })
export class ModuleModel implements Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
