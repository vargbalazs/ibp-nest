import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Operation } from '../interfaces/operation.interface';
import { PermissionModel } from 'src/models/permissions/entities/permission.entity';
import { SubModuleModel } from 'src/models/admin/sub-modules/entities/sub-module.entity';

@Entity({ name: 'operations', synchronize: false })
export class OperationModel implements Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PermissionModel, (permission) => permission.operation)
  permissions: PermissionModel[];

  @ManyToOne(() => SubModuleModel, (subModule) => subModule.operations, {
    nullable: false,
  })
  subModule: SubModuleModel;
}
