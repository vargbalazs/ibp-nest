import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: () => 'gen_random_uuid()', name: 'user_id' })
  userId: string;

  @Column({ name: 'first-name' })
  firstName: string;

  @Column({ name: 'last-name' })
  lastName: string;

  userName: string;
  userEmail: string;
  password: string;
  lastLoginDate: Date;
  joinDate: Date;
  active: boolean;
  notLocked: boolean;
  firstLogin: boolean;
}
