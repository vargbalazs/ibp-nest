import { IBaseRepository } from 'src/models/base-repository.interface';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserRepository
  extends IBaseRepository<User, CreateUserDto, UpdateUserDto> {}

export const IUserRepository = Symbol('IUserRepository');
