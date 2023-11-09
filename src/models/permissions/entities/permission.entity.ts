import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from '../interfaces/permission.interface';
import { OperationModel } from 'src/models/operations/entities/operation.entity';
import { RoleModel } from 'src/models/roles/entities/role.entity';
import { ActionModel } from 'src/models/actions/entities/action.entity';

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

  @OneToOne(() => ActionModel)
  @JoinColumn()
  action: ActionModel;
}
