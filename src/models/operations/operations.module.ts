import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationModel } from './entities/operation.entity';
import { OperationService } from './operations.service';
import { OperationController } from './operations.controller';
import { OperationRepository } from './operations.repository';
import { OperationModelRepository } from './interfaces/repository.interface';
import { OperationEntity } from './serializers/operation.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([OperationModel])],
  providers: [
    OperationService,
    { provide: ENTITY, useValue: OperationModel },
    { provide: OperationModelRepository, useClass: OperationRepository },
    { provide: SERIALIZER, useValue: OperationEntity },
  ],
  controllers: [OperationController],
})
export class OperationsModule {}
