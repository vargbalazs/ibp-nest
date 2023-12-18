import { BuModel } from '../../bu/entities/bu.entitiy';

export interface Customer {
  id: number;
  name: string;
  bu: BuModel;
}
