import { UserModel } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModelRepository } from './interfaces/repository.interface';
import generator from 'generate-password-ts';
import * as bcryptjs from 'bcryptjs';
import { TypeOrmRepository } from '../../base/type-orm.repository';
import { MailService } from 'src/mail/mail.service';
import { Inject } from '@nestjs/common';
import { ChangePwdDto } from './dto/change-pwd.dto';
import { PasswordsNotMatchException } from 'src/common/exceptions/passwords-not-match.exception';

export class UserRepository
  extends TypeOrmRepository<UserModel>
  implements UserModelRepository
{
  @Inject() private readonly mailService: MailService;

  override async createEntity(user: CreateUserDto): Promise<UserModel> {
    const newUser = this.create(user);

    const password = generator.generate({
      length: 10,
      numbers: true,
      lowercase: true,
      uppercase: true,
    });

    const hash = await bcryptjs.hash(password, 10);

    newUser.password = hash;

    this.mailService.sendInitialPassword(newUser.userEmail, password);

    return this.save(newUser);
  }

  async findUserWithRoleGroupsAndPermissions(
    userId: string,
  ): Promise<UserModel> {
    const [user] = await this.find({
      where: { userId: userId },
      relations: {
        roleGroups: { roles: { permissions: true }, routes: true },
        constraints: true,
      },
      loadEagerRelations: false,
    });
    return user;
  }

  async changePwd(changePwdDto: ChangePwdDto): Promise<string> {
    if (changePwdDto.password !== changePwdDto.confirmPassword)
      throw new PasswordsNotMatchException();

    const user = await this.findByColumn('userId', changePwdDto.userId);

    const hash = await bcryptjs.hash(changePwdDto.password, 10);

    await this.updatePartial('userId', changePwdDto.userId, {
      password: hash,
      firstLogin: false,
    });

    return user.userId;
  }
}
