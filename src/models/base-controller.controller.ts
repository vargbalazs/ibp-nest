import { Controller, Post, Body } from '@nestjs/common';
import { BaseService } from './base-service.service';
import { DeepPartial } from 'typeorm';

@Controller()
export abstract class BaseController<T, T2> {
  constructor(private readonly service: BaseService<T>) {}

  @Post()
  async create(@Body() createDto: DeepPartial<T>): Promise<T2> {
    return new UserEntity(await this.service.createEntity(createDto));
  }
}
