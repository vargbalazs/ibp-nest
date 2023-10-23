import { Role } from '../interfaces/role.interface';

export class RoleEntity implements Role {
  constructor(partial: Partial<RoleEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
}
