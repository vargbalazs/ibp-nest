import { Operation } from '../interfaces/operation.interface';

export class OperationEntity implements Operation {
  constructor(partial: Partial<OperationEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
