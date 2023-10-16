import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './serializers/user.serializer';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return new UserEntity(await this.userService.createUser(createUserDto));
  }
}
