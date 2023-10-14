import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../interfaces/user.interface';

@Entity({ name: 'users' })
export class User implements IUser {
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

  @UpdateDateColumn({ type: 'timestamp' })
  lastLoginDate: Date;

  @Column()
  active: boolean;

  @Column()
  notLocked: boolean;

  @Column()
  firstLogin: boolean;
}
