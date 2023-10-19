import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { IUserRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {
    super(userRepository);
  }

  async findByUserName(userName: string): Promise<User> {
    return this.userRepository.findByColumn('userName', userName);
  }

  async findByUserEmail(userEmail: string): Promise<User> {
    return this.userRepository.findByColumn('userEmail', userEmail);
  }
}
