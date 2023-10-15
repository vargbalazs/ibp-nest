import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | undefined>;
  addEntity(user: CreateUserDto): Promise<User>;
  updateEntity(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined>;
  deleteEntity(id: number): Promise<boolean>;
}

export const IUserRepository = Symbol('IUserRepository');
