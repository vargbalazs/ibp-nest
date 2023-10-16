import { IBaseRepository } from 'src/models/base-repository.interface';
import { User } from '../entities/user.entity';

export interface IUserRepository extends IBaseRepository<User> {}

export const IUserRepository = Symbol('IUserRepository');
