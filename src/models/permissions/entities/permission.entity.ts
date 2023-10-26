import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from '../interfaces/permission.interface';

@Entity({ name: 'permissions', synchronize: true })
export class PermissionModel implements Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
