import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  DataSource,
  DeepPartial,
  EntityTarget,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

export abstract class TypeOrmRepository<
  T extends { id: number },
> extends Repository<T> {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    @Inject('ENTITY') private readonly entity: EntityTarget<T>,
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

  async deleteEntity(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected > 0;
  }
}
