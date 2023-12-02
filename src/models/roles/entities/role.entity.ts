import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../interfaces/role.interface';
import { RoleGroupModel } from 'src/models/role-groups/entities/role-group.entity';
import { PermissionModel } from 'src/models/admin/permissions/entities/permission.entity';

@Entity({ name: 'roles', synchronize: false })
export class RoleModel implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoleGroupModel, (roleGroup) => roleGroup.roles)
  roleGroups: RoleGroupModel[];

  @ManyToMany(() => PermissionModel, (permission) => permission.roles, {
    eager: false,
  })
  @JoinTable({ name: 'roles_permissions', synchronize: false })
  permissions: PermissionModel[];
}
