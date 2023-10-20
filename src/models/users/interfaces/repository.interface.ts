import { BaseRepository } from 'src/models/base-repository.interface';
import { UserModel } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface UserModelRepository
  extends BaseRepository<UserModel, CreateUserDto, UpdateUserDto> {}

export const UserModelRepository = Symbol('UserModelRepository');
