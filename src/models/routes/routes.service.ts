import { Inject, Injectable } from '@nestjs/common';
import { RouteModel } from './entities/route.entity';
import { RouteModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../base-service.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService extends BaseService<
  RouteModel,
  CreateRouteDto,
  UpdateRouteDto
> {
  constructor(
    @Inject(RouteModelRepository)
    private readonly RouteRepository: RouteModelRepository,
  ) {
    super(RouteRepository);
  }
}
