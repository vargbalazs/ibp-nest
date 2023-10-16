import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UserRepository } from './users.repository';
import { IUserRepository } from './interfaces/repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    { provide: 'ENTITY', useValue: User },
    { provide: IUserRepository, useClass: UserRepository },
  ],
  controllers: [UserController],
})
export class UsersModule {}
