import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from '../interfaces/permission.interface';
import { OperationModel } from 'src/models/operations/entities/operation.entity';

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
}
