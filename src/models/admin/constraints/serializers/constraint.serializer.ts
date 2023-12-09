import { Constraint } from '../interfaces/constraint.interface';

export class ConstraintEntity implements Constraint {
  constructor(partial: Partial<ConstraintEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  name: string;
  objectName: string;
  objectField: string;
  objectValue: string;
}
