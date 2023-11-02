import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { ENTITY } from 'src/common/constants/injection-tokens.constant';
import {
  DataSource,
  DeepPartial,
  EntityTarget,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class TypeOrmRepository<
  T extends { id: number },
> extends Repository<T> {
  constructor(
    @InjectDataSource()
    public dataSource: DataSource,
    @Inject(ENTITY) private readonly entity: EntityTarget<T>,
  ) {
    super(entity, dataSource.createEntityManager());
  }

  async findAll(): Promise<T[]> {
    return this.find();
  }

  async findById(id: number): Promise<T> {
    const options: FindOptionsWhere<T> = {
      id: id,
    } as FindOptionsWhere<T>;
    return this.findOneBy(options);
  }

  async findByColumn(
    columnName: string,
    columnValue: number | string,
  ): Promise<T> {
    const options: FindOptionsWhere<T> = {
      [columnName]: columnValue,
    } as FindOptionsWhere<T>;
    return this.findOneBy(options);
  }

  async createEntity(entity: DeepPartial<T>): Promise<T> {
    const newEntity = this.create(entity);
    return this.save(newEntity);
  }

  async updateEntity(
    id: number,
    entity: DeepPartial<T>,
  ): Promise<T | undefined> {
    const oldEntity = await this.findById(id);
    if (!oldEntity) return undefined;

    Object.assign(oldEntity, entity);
    return this.save(oldEntity);
  }

  async deleteEntity(id: number): Promise<number> {
    await this.delete(id);
    return id;
  }

  async updatePartial(
    idColumn: string,
    idValue: number | string,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    const options: FindOptionsWhere<T> = {
      [idColumn]: idValue,
    } as FindOptionsWhere<T>;
    return this.update(options, partialEntity);
  }
}
