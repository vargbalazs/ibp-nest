import { ModuleModel } from 'src/models/modules/entities/module.entity';
import { SubModule } from '../interfaces/sub-module.interface';

export class SubModuleEntity implements SubModule {
  constructor(partial: Partial<SubModuleEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  module: ModuleModel;
}
