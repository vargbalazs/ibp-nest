import { Controller, Post, Body, Inject, Type } from '@nestjs/common';
import { BaseService } from './base-service.service';
import { SERIALIZER } from 'src/common/constants/injection-tokens.constant';

@Controller()
/*
T = database entity (like User class)
T2 = serializer entity (like UserEntity class)
T3 = createDto class 
T4 = updateDto class
 */
export abstract class BaseController<T, T2, T3, T4> {
  constructor(private readonly service: BaseService<T, T3, T4>) {}

  @Inject(SERIALIZER) private readonly serializer: Type<T2>;

  @Post()
  async create(@Body() createDto: T3): Promise<T2> {
    return new this.serializer(await this.service.createEntity(createDto));
  }
}
