import { User } from '../interfaces/user.interface';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @Exclude()
  id: number;

  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  userEmail: string;

  @Exclude()
  password: string;

  lastLoginDate: Date;
  joinDate: Date;
  active: boolean;
  notLocked: boolean;
  firstLogin: boolean;

  @Exclude()
  refreshToken: string;
}
