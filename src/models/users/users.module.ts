import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UserRepository } from './users.repository';
import { UserModelRepository } from './interfaces/repository.interface';
import { UserEntity } from './serializers/user.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [
    UserService,
    { provide: ENTITY, useValue: UserModel },
    { provide: UserModelRepository, useClass: UserRepository },
    { provide: SERIALIZER, useValue: UserEntity },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UsersModule {}
