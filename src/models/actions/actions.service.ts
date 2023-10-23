import { Inject, Injectable } from '@nestjs/common';
import { ActionModel } from './entities/action.entity';
import { ActionModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';

@Injectable()
export class ActionService extends BaseService<
  ActionModel,
  CreateActionDto,
  UpdateActionDto
> {
  constructor(
    @Inject(ActionModelRepository)
    private readonly actionRepository: ActionModelRepository,
  ) {
    super(actionRepository);
  }
}
