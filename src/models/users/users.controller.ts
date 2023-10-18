import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './serializers/user.serializer';
import { BaseController } from '../base-controller.controller';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController extends BaseController<
  User,
  UserEntity,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Post()
  override async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return new UserEntity(await this.userService.createEntity(createUserDto));
  }
}
