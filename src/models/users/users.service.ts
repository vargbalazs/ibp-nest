import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { IUserRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {
    super(userRepository);
  }
}
