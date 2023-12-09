import { BaseRepository } from 'src/models/base/base-repository.interface';
import { ConstraintModel } from '../entities/constraint.entity';
import { CreateConstraintDto } from '../dto/create-constraint.dto';
import { UpdateConstraintDto } from '../dto/update-constraint.dto';

export interface ConstraintModelRepository
  extends BaseRepository<
    ConstraintModel,
    CreateConstraintDto,
    UpdateConstraintDto
  > {}

export const ConstraintModelRepository = Symbol('ConstraintModelRepository');
