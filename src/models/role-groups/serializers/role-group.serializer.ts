import { RoleGroup } from '../interfaces/role-group.interface';

export class RoleGroupEntity implements RoleGroup {
  constructor(partial: Partial<RoleGroupEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  name: string;
}
