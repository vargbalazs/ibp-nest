import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './serializers/user.serializer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return new UserEntity(await this.userService.createEntity(createUserDto));
  }
}
