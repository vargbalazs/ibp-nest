import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserEntity } from './serializers/user.serializer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('username-exists')
  async findByUserName(@Query('user-name') userName: string): Promise<boolean> {
    const user = await this.userService.findByUserName(userName);
    return !!user;
  }

  @Get('useremail-exists')
  async findByUserEmail(
    @Query('user-email') userEmail: string,
  ): Promise<boolean> {
    const user = await this.userService.findByUserEmail(userEmail);
    return !!user;
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':userId')
  async findByUserId(@Param('userId') userId: string): Promise<UserEntity> {
    return new UserEntity(
      await this.userService.findByColumn('userId', userId),
    );
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return new UserEntity(await this.userService.createEntity(createUserDto));
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userService.findByColumn('userId', userId);
    return new UserEntity(
      await this.userService.updateEntity(user.id, updateUserDto),
    );
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string): Promise<boolean> {
    const user = await this.userService.findByColumn('userId', userId);
    return this.userService.deleteEntity(user.id);
  }
}
