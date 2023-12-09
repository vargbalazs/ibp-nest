import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstraintModel } from './entities/constraint.entity';
import { ConstraintService } from './constraints.service';
import { ConstraintController } from './constraints.controller';
import { ConstraintRepository } from './constraints.repository';
import { ConstraintModelRepository } from './interfaces/repository.interface';
import { ConstraintEntity } from './serializers/constraint.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([ConstraintModel])],
  providers: [
    ConstraintService,
    { provide: ENTITY, useValue: ConstraintModel },
    { provide: ConstraintModelRepository, useClass: ConstraintRepository },
    { provide: SERIALIZER, useValue: ConstraintEntity },
  ],
  controllers: [ConstraintController],
})
export class ConstraintsModule {}
