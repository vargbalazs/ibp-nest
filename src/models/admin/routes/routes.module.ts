import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteModel } from './entities/route.entity';
import { RouteService } from './routes.service';
import { RouteController } from './routes.controller';
import { RouteRepository } from './routes.repository';
import { RouteModelRepository } from './interfaces/repository.interface';
import { RouteEntity } from './serializers/route.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([RouteModel])],
  providers: [
    RouteService,
    { provide: ENTITY, useValue: RouteModel },
    { provide: RouteModelRepository, useClass: RouteRepository },
    { provide: SERIALIZER, useValue: RouteEntity },
  ],
  controllers: [RouteController],
})
export class RoutesModule {}
