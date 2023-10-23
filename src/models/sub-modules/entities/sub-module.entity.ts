import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SubModule } from '../interfaces/sub-module.interface';
import { ModuleModel } from 'src/models/modules/entities/module.entity';

@Entity({ name: 'submodules', synchronize: true })
export class SubModuleModel implements SubModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ModuleModel, (module) => module.subModules, {
    nullable: false,
  })
  module: ModuleModel;
}
