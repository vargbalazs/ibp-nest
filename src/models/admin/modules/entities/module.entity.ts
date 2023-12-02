import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Module } from '../interfaces/module.interface';
import { SubModuleModel } from 'src/models/sub-modules/entities/sub-module.entity';

@Entity({ name: 'modules', synchronize: false })
export class ModuleModel implements Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SubModuleModel, (subModule) => subModule.module)
  subModules: SubModuleModel[];
}
