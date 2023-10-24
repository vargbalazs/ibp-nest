import { UserModel } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModelRepository } from './interfaces/repository.interface';
import generator from 'generate-password-ts';
import * as bcryptjs from 'bcryptjs';
import { TypeOrmRepository } from '../type-orm.repository';

export class UserRepository
  extends TypeOrmRepository<UserModel>
  implements UserModelRepository
{
  override async createEntity(user: CreateUserDto): Promise<UserModel> {
    const newUser = this.create(user);
    const password = generator.generate({
      length: 10,
      numbers: true,
      lowercase: true,
      uppercase: true,
    });
    console.log(`password for new user: ${password}`);
    const hash = await bcryptjs.hash(password, 10);
    newUser.password = hash;
    return this.save(newUser);
  }
}
