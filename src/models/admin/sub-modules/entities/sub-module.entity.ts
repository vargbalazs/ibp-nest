import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubModule } from '../interfaces/sub-module.interface';
import { ModuleModel } from 'src/models/admin/modules/entities/module.entity';
import { OperationModel } from 'src/models/admin/operations/entities/operation.entity';

@Entity({ name: 'submodules', synchronize: false })
export class SubModuleModel implements SubModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ModuleModel, (module) => module.subModules, {
    nullable: false,
    eager: true,
  })
  module: ModuleModel;

  @OneToMany(() => OperationModel, (operation) => operation.subModule)
  operations: OperationModel[];
}
