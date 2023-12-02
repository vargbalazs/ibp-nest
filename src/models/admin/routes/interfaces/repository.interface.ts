import { BaseRepository } from 'src/models/base/base-repository.interface';
import { RouteModel } from '../entities/route.entity';
import { CreateRouteDto } from '../dto/create-route.dto';
import { UpdateRouteDto } from '../dto/update-route.dto';

export interface RouteModelRepository
  extends BaseRepository<RouteModel, CreateRouteDto, UpdateRouteDto> {}

export const RouteModelRepository = Symbol('RouteModelRepository');
