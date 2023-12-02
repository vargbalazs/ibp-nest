import { SubModuleModel } from 'src/models/admin/sub-modules/entities/sub-module.entity';

export interface Module {
  id: number;
  name: string;
  subModules: SubModuleModel[];
}
