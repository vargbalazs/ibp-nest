import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../interfaces/role.interface';

@Entity({ name: 'roles', synchronize: false })
export class RoleModel implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
