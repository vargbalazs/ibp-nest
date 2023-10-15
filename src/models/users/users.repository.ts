import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserRepository } from './interfaces/repository.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectDataSource } from '@nestjs/typeorm';

export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {
    super(User, dataSource.createEntityManager());
  }

  async findAll(): Promise<User[]> {
    return this.find();
  }

  async findById(id: number): Promise<User> {
    return this.findOneBy({ id: id });
  }

  async addEntity(user: CreateUserDto): Promise<User> {
    const newUser = this.create(user);
    return this.save(newUser);
  }

  async updateEntity(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    const user = await this.findById(id);
    if (!user) return undefined;

    Object.assign(user, updateUserDto);
    return this.save(user);
  }

  async deleteEntity(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected > 0;
  }
}
