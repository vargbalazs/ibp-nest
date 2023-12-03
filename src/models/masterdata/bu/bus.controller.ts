import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BuService } from './bus.service';
import { BuEntity } from './serializers/bu.serializer';
import { CreateBuDto } from './dto/create-bu.dto';
import { UpdateBuDto } from './dto/update-bu.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import Permissions from 'src/authentication/permissions/permissions.type';

@Controller('bus')
export class BuController {
  constructor(private readonly buService: BuService) {}

  @Get()
  @RequirePermissions(Permissions.VIEW_BU)
  async getBus(): Promise<BuEntity[]> {
    const bus = await this.buService.findAll();
    return bus.map((bu) => new BuEntity(bu));
  }

  @Get(':buId')
  async getBu(@Param('buId') buId: number): Promise<BuEntity> {
    return new BuEntity(await this.buService.findById(buId));
  }

  @Post()
  async create(@Body() createBuDto: CreateBuDto): Promise<BuEntity> {
    return new BuEntity(await this.buService.createEntity(createBuDto));
  }

  @Put(':buId')
  async update(
    @Param('buId') buId: number,
    @Body() updateBuDto: UpdateBuDto,
  ): Promise<BuEntity> {
    return new BuEntity(await this.buService.updateEntity(buId, updateBuDto));
  }

  @Delete(':buId')
  async delete(@Param('buId') buId: number): Promise<number> {
    return this.buService.deleteEntity(buId);
  }
}
