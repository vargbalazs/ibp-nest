import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuModel } from './entities/bu.entitiy';
import { BuService } from './bus.service';
import { BuController } from './bus.controller';
import { BuRepository } from './bus.repository';
import { BuModelRepository } from './interfaces/repository.interface';
import { BuEntity } from './serializers/bu.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([BuModel])],
  providers: [
    BuService,
    { provide: ENTITY, useValue: BuModel },
    { provide: BuModelRepository, useClass: BuRepository },
    { provide: SERIALIZER, useValue: BuEntity },
  ],
  controllers: [BuController],
})
export class BusModule {}
