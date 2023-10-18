import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return new UserEntity(
      await this.userService.updateEntity(id, updateUserDto),
    );
  }

  @Get(':userId')
  async findByUserId(@Param('userId') userId: string) {
    return new UserEntity(
      await this.userService.findByColumn('userId', userId),
    );
  }
}
