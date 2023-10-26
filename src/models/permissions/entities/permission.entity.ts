import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from '../interfaces/permission.interface';
import { OperationModel } from 'src/models/operations/entities/operation.entity';
import { RoleModel } from 'src/models/roles/entities/role.entity';

@Entity({ name: 'permissions', synchronize: false })
export class PermissionModel implements Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => OperationModel, (operation) => operation.permissions, {
    nullable: false,
  })
  operation: OperationModel;

  @ManyToMany(() => RoleModel, (role) => role.permissions)
  roles: RoleModel[];
}
