import { Inject, Injectable } from '@nestjs/common';
import { ConstraintModel } from './entities/constraint.entity';
import { ConstraintModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateConstraintDto } from './dto/create-constraint.dto';
import { UpdateConstraintDto } from './dto/update-constraint.dto';

@Injectable()
export class ConstraintService extends BaseService<
  ConstraintModel,
  CreateConstraintDto,
  UpdateConstraintDto
> {
  constructor(
    @Inject(ConstraintModelRepository)
    private readonly constraintRepository: ConstraintModelRepository,
  ) {
    super(constraintRepository);
  }
}
