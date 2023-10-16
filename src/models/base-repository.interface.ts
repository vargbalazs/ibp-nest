import { BaseDto } from './base.dto';

export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  addEntity(createDto: BaseDto): Promise<T>;
  updateEntity(id: number, updateDto: BaseDto): Promise<T | undefined>;
  deleteEntity(id: number): Promise<boolean>;
}
