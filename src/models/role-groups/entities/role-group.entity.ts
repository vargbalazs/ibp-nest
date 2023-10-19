import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IRoleGroup } from '../interfaces/role-group.interface';

@Entity({ name: 'rolegroups' })
export class RoleGroup implements IRoleGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
