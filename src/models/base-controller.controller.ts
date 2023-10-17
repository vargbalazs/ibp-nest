import { Controller, Post, Body, Inject } from '@nestjs/common';
import { BaseService } from './base-service.service';
import { DeepPartial } from 'typeorm';

@Controller()
export abstract class BaseController<T, T2> {
  constructor(private readonly service: BaseService<T>) {}

  @Inject('SERIALIZER') private readonly serializer: any;

  @Post()
  async create(@Body() createDto: DeepPartial<T>): Promise<T2> {
    return new this.serializer(await this.service.createEntity(createDto));
  }
}
