import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Operation } from '../interfaces/operation.interface';
import { PermissionModel } from 'src/models/permissions/entities/permission.entity';

@Entity({ name: 'operations', synchronize: false })
export class OperationModel implements Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PermissionModel, (permission) => permission.operation)
  permissions: PermissionModel[];
}
