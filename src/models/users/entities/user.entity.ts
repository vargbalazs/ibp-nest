import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../interfaces/user.interface';

@Entity({ name: 'users' })
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
}
