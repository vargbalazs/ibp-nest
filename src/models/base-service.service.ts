import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseRepository } from './base-repository.interface';
import { FindOptionsWhere, UpdateResult } from 'typeorm';

/*
T = database entity (like User class)
T2 = createDto class
T3 = updateDto class
 */
export abstract class BaseService<T, T2, T3> {
  constructor(private readonly repository: BaseRepository<T, T2, T3>) {}

  async createEntity(createDto: T2): Promise<T> {
    return this.repository.createEntity(createDto);
  }

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async findById(id: number): Promise<T | undefined> {
    return this.repository.findById(id);
  }

  async findByColumn(
    columnName: string,
    columnValue: number | string,
  ): Promise<T | undefined> {
    return this.repository.findByColumn(columnName, columnValue);
  }

  async updateEntity(id: number, updateDto: T3): Promise<T | undefined> {
    return this.repository.updateEntity(id, updateDto);
  }

  async deleteEntity(id: number): Promise<boolean> {
    return this.repository.deleteEntity(id);
  }

  async updatePartial(
    idColumn: string,
    idValue: number | string,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return this.repository.updatePartial(idColumn, idValue, partialEntity);
  }
}
