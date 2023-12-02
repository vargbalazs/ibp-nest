import { BaseRepository } from 'src/models/base/base-repository.interface';
import { UserModel } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ChangePwdDto } from '../dto/change-pwd.dto';

export interface UserModelRepository
  extends BaseRepository<UserModel, CreateUserDto, UpdateUserDto> {
  findUserWithRoleGroupsAndPermissions(userId: string): Promise<UserModel>;

  changePwd(changePwdDto: ChangePwdDto): Promise<string>;
}

export const UserModelRepository = Symbol('UserModelRepository');
