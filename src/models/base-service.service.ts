import { DeepPartial } from 'typeorm';
import { IBaseRepository } from './base-repository.interface';

/*
T = database entity (like User class)
T2 = createDto class
T3 = updateDto class
 */
export abstract class BaseService<T, T2, T3> {
  constructor(private readonly repository: IBaseRepository<T, T2, T3>) {}

  async createEntity(createDto: T2): Promise<T> {
    return this.repository.createEntity(createDto);
  }

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<T | undefined> {
    return this.repository.findById(id);
  }

  async updateEntity(id: number, updateDto: T3): Promise<T | undefined> {
    return this.repository.updateEntity(id, updateDto);
  }

  async deleteEntity(id: number): Promise<boolean> {
    return this.repository.deleteEntity(id);
  }
}
