import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleGroup } from '../interfaces/role-group.interface';
import { RoleModel } from 'src/models/roles/entities/role.entity';
import { UserModel } from 'src/models/users/entities/user.entity';

@Entity({ name: 'rolegroups', synchronize: false })
export class RoleGroupModel implements RoleGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoleModel, (role) => role.roleGroups, { eager: true })
  @JoinTable({ name: 'rolegroups_roles', synchronize: false })
  roles: RoleModel[];

  @ManyToMany(() => UserModel, (user) => user.roleGroups)
  users: UserModel[];
}
