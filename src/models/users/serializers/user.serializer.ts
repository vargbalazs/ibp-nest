import { ModelEntity } from 'src/common/constants/serializers/model.serializer';
import { IUser } from '../interfaces/user.interface';
import { Exclude } from 'class-transformer';

export class UserEntity extends ModelEntity implements IUser {
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
}
