import { Inject, Injectable } from '@nestjs/common';
import { BuModel } from './entities/bu.entitiy';
import { BuModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateBuDto } from './dto/create-bu.dto';
import { UpdateBuDto } from './dto/update-bu.dto';

@Injectable()
export class BuService extends BaseService<BuModel, CreateBuDto, UpdateBuDto> {
  constructor(
    @Inject(BuModelRepository)
    private readonly BuRepository: BuModelRepository,
  ) {
    super(BuRepository);
  }
}
