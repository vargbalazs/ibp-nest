import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../interfaces/user.interface';
import { RoleGroupModel } from 'src/models/admin/role-groups/entities/role-group.entity';
import { ConstraintModel } from '../../constraints/entities/constraint.entity';

@Entity({ name: 'users', synchronize: false })
export class UserModel implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: () => 'gen_random_uuid()' })
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  joinDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  lastLoginDate: Date;

  @Column({ default: false })
  active: boolean;

  @Column({ default: false })
  notLocked: boolean;

  @Column({ default: true })
  firstLogin: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @ManyToMany(() => RoleGroupModel, (roleGroup) => roleGroup.users, {
    eager: false,
  })
  @JoinTable({ name: 'users_rolegroups', synchronize: false })
  roleGroups: RoleGroupModel[];

  @OneToMany(() => ConstraintModel, (constraint) => constraint.user)
  constraints: ConstraintModel[];
}
