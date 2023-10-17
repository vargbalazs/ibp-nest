import { DeepPartial } from 'typeorm';

export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  createEntity(createDto: DeepPartial<T>): Promise<T>;
  updateEntity(id: number, updateDto: DeepPartial<T>): Promise<T | undefined>;
  deleteEntity(id: number): Promise<boolean>;
}
