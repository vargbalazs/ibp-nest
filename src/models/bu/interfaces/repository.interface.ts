import { BaseRepository } from 'src/models/base/base-repository.interface';
import { BuModel } from '../entities/bu.entitiy';
import { CreateBuDto } from '../dto/create-bu.dto';
import { UpdateBuDto } from '../dto/update-bu.dto';

export interface BuModelRepository
  extends BaseRepository<BuModel, CreateBuDto, UpdateBuDto> {}

export const BuModelRepository = Symbol('BuModelRepository');
