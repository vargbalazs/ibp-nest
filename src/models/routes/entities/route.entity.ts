import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Route } from '../interfaces/route.interface';
import { RoleGroupModel } from 'src/models/role-groups/entities/role-group.entity';

@Entity({ name: 'routes', synchronize: false })
export class RouteModel implements Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => RoleGroupModel, (roleGroup) => roleGroup.routes, {
    eager: true,
  })
  @JoinTable({ name: 'routes_rolegroups', synchronize: false })
  roleGroups: RoleGroupModel[];
}
