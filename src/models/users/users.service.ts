import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from './entities/user.entity';
import { UserModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePwdDto } from './dto/change-pwd.dto';

@Injectable()
export class UserService extends BaseService<
  UserModel,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @Inject(UserModelRepository)
    private readonly userRepository: UserModelRepository,
  ) {
    super(userRepository);
  }

  async findByUserName(userName: string): Promise<UserModel> {
    return this.userRepository.findByColumn('userName', userName);
  }

  async findByUserEmail(userEmail: string): Promise<UserModel> {
    return this.userRepository.findByColumn('userEmail', userEmail);
  }

  async getUserWithRoleGroupsAndPermissions(
    userId: string,
  ): Promise<UserModel> {
    return await this.userRepository.findUserWithRoleGroupsAndPermissions(
      userId,
    );
  }

  async changeUserPwd(changePwdDto: ChangePwdDto): Promise<string> {
    return await this.userRepository.changePwd(changePwdDto);
  }
}
