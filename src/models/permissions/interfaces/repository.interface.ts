import { BaseRepository } from 'src/models/base-repository.interface';
import { ActionModel } from '../entities/permission.entity';
import { CreateActionDto } from '../dto/create-permission.dto';
import { UpdateActionDto } from '../dto/update-permission.dto';

export interface ActionModelRepository
  extends BaseRepository<ActionModel, CreateActionDto, UpdateActionDto> {}

export const ActionModelRepository = Symbol('ActionModelRepository');
