import { Type } from 'class-transformer';
import { RoleGroup } from '../interfaces/role-group.interface';
import { UserEntity } from 'src/models/admin/users/serializers/user.serializer';

export class RoleGroupEntity implements RoleGroup {
  constructor(partial: Partial<RoleGroupEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  name: string;
  @Type(() => UserEntity)
  users: UserEntity[];
}
