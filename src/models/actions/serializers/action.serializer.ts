import { Action } from '../interfaces/action.interface';

export class ActionEntity implements Action {
  constructor(partial: Partial<ActionEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
