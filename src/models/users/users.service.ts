import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './interfaces/repository.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.addEntity(createUserDto);
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    return this.userRepository.updateEntity(id, updateUserDto);
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.userRepository.deleteEntity(id);
  }
}
