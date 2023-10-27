import { UserModel } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModelRepository } from './interfaces/repository.interface';
import generator from 'generate-password-ts';
import * as bcryptjs from 'bcryptjs';
import { TypeOrmRepository } from '../type-orm.repository';
import { MailService } from 'src/mail/mail.service';
import { Inject } from '@nestjs/common';

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

  async findUserWithRoleGroups(userId: string): Promise<UserModel> {
    return await this.findOne({
      where: { userId: userId },
      relations: { roleGroups: true },
    });
  }
}
