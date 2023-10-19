import { IRoleGroup } from '../interfaces/role-group.interface';

export class RoleGroupEntity implements IRoleGroup {
  constructor(partial: Partial<RoleGroupEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  name: string;
}
