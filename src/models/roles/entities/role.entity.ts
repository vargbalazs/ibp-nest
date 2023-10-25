import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../interfaces/role.interface';
import { RoleGroupModel } from 'src/models/role-groups/entities/role-group.entity';

@Entity({ name: 'roles', synchronize: false })
export class RoleModel implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoleGroupModel, (roleGroup) => roleGroup.roles, {
    eager: true,
  })
  roleGroups: RoleGroupModel[];
}
