import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Constraint } from '../interfaces/constraint.interface';
import { UserModel } from '../../users/entities/user.entity';
import { RoleModel } from '../../roles/entities/role.entity';

@Entity({ name: 'constraints', synchronize: true })
export class ConstraintModel implements Constraint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  objectName: string;

  @Column()
  objectField: string;

  @Column()
  objectValue: string;

  @ManyToOne(() => UserModel, (user) => user.constraints, {
    nullable: false,
  })
  user: UserModel;

  @ManyToOne(() => RoleModel, (role) => role.constraints, {
    nullable: false,
  })
  role: RoleModel;
}
