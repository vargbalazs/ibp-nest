import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityTarget, Repository } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {
    super(User, dataSource.createEntityManager());
  }
}
