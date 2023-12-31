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
import { Public } from 'src/common/decorators/public.decorator';
import { ChangePwdDto } from './dto/change-pwd.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get('username-exists')
  async findByUserName(@Query('user-name') userName: string): Promise<boolean> {
    const user = await this.userService.findByUserName(userName);
    return !!user;
  }

  @Public()
  @Get('useremail-exists')
  async findByUserEmail(
    @Query('user-email') userEmail: string,
  ): Promise<boolean> {
    const user = await this.userService.findByUserEmail(userEmail);
    return !!user;
  }

  @Get('user-with-rolegroups-and-permissions/:userId')
  async getUserWithRoleGroups(
    @Param('userId') userId: string,
  ): Promise<UserEntity> {
    return new UserEntity(
      await this.userService.getUserWithRoleGroupsAndPermissions(userId),
    );
  }

  @Get()
  @RequirePermissions(AdminPermissions.ADMIN)
  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':userId')
  @RequirePermissions(AdminPermissions.ADMIN)
  async findByUserId(@Param('userId') userId: string): Promise<UserEntity> {
    return new UserEntity(
      await this.userService.findByColumn('userId', userId),
    );
  }

  @Public()
  @Post('signup')
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return new UserEntity(await this.userService.createEntity(createUserDto));
  }

  @Post('changepwd')
  async changePwd(@Body() changePwdDto: ChangePwdDto): Promise<string> {
    const userId = await this.userService.changeUserPwd(changePwdDto);
    return JSON.stringify(userId);
  }

  @Put(':userId')
  @RequirePermissions(AdminPermissions.ADMIN)
  async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.userService.findByColumn('userId', userId);
    return new UserEntity(
      await this.userService.updateEntity(user.id, updateUserDto),
    );
  }

  @Delete()
  @RequirePermissions(AdminPermissions.ADMIN)
  async delete(@Query('userId') userId: string): Promise<string> {
    const user = await this.userService.findByColumn('userId', userId);
    await this.userService.deleteEntity(user.id);
    return JSON.stringify(user.userId);
  }
}
