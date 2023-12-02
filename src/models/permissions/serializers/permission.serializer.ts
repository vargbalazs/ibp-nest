import { Permission } from '../interfaces/permission.interface';
import { OperationModel } from 'src/models/admin/operations/entities/operation.entity';

export class PermissionEntity implements Permission {
  constructor(partial: Partial<PermissionEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  operation: OperationModel;
}
