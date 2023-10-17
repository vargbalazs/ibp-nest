import { DeepPartial } from 'typeorm';
import { IBaseRepository } from './base-repository.interface';

export abstract class BaseService<T> {
  constructor(private readonly repository: IBaseRepository<T>) {}

  async createEntity(createDto: DeepPartial<T>): Promise<T> {
    return this.repository.createEntity(createDto);
  }

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<T | undefined> {
    return this.repository.findById(id);
  }

  async updateEntity(
    id: number,
    updateDto: DeepPartial<T>,
  ): Promise<T | undefined> {
    return this.repository.updateEntity(id, updateDto);
  }

  async deleteEntity(id: number): Promise<boolean> {
    return this.repository.deleteEntity(id);
  }
}
