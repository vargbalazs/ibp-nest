import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoleGroup } from '../interfaces/role-group.interface';

@Entity({ name: 'rolegroups' })
export class RoleGroupModel implements RoleGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}