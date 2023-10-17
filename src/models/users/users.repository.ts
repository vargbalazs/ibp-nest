import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserRepository } from './interfaces/repository.interface';
import generator from 'generate-password-ts';
import * as bcryptjs from 'bcryptjs';
import { TypeOrmRepository } from '../type-orm.repository';

export class UserRepository
  extends TypeOrmRepository<User>
  implements IUserRepository
{
  override async addEntity(user: CreateUserDto): Promise<User> {
    const newUser = this.create(user);
    const password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
    });
    const hash = await bcryptjs.hash(password, 10);
    newUser.password = hash;
    return this.save(newUser);
  }
}
