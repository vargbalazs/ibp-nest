import { Inject } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityTarget, Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    @Inject('ENTITY') private readonly entity: EntityTarget<T>,
  ) {
    super(entity, dataSource.createEntityManager());
  }
}
