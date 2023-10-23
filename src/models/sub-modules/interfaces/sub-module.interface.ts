import { ModuleModel } from 'src/models/modules/entities/module.entity';

export interface SubModule {
  id: number;
  name: string;
  module: ModuleModel;
}
