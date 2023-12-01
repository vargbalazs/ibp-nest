import { Bu } from '../interfaces/bu.interface';

export class BuEntity implements Bu {
  constructor(partial: Partial<BuEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
