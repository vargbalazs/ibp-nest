import { OperationsModule } from 'src/models/operations/operations.module';
import { Permission } from '../interfaces/permission.interface';

export class PermissionEntity implements Permission {
  constructor(partial: Partial<PermissionEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  operation: OperationsModule;
}
