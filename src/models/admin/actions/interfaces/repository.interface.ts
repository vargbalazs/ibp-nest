import { BaseRepository } from 'src/models/base/base-repository.interface';
import { ActionModel } from '../entities/action.entity';
import { CreateActionDto } from '../dto/create-action.dto';
import { UpdateActionDto } from '../dto/update-action.dto';

export interface ActionModelRepository
  extends BaseRepository<ActionModel, CreateActionDto, UpdateActionDto> {}

export const ActionModelRepository = Symbol('ActionModelRepository');
