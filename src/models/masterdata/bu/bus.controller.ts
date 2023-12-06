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
import BuPermissions from 'src/authentication/permissions/bu-permissions.enum';

@Controller('bus')
export class BuController {
  constructor(private readonly buService: BuService) {}

  @Get()
  @RequirePermissions(BuPermissions.VIEW_BU)
  async getBus(): Promise<BuEntity[]> {
    const bus = await this.buService.findAll();
    return bus.map((bu) => new BuEntity(bu));
  }

  @RequirePermissions(BuPermissions.VIEW_BU)
  @Get(':buId')
  async getBu(@Param('buId') buId: number): Promise<BuEntity> {
    return new BuEntity(await this.buService.findById(buId));
  }

  @RequirePermissions(BuPermissions.CREATE_BU)
  @Post()
  async create(@Body() createBuDto: CreateBuDto): Promise<BuEntity> {
    return new BuEntity(await this.buService.createEntity(createBuDto));
  }

  @RequirePermissions(BuPermissions.EDIT_BU)
  @Put(':buId')
  async update(
    @Param('buId') buId: number,
    @Body() updateBuDto: UpdateBuDto,
  ): Promise<BuEntity> {
    return new BuEntity(await this.buService.updateEntity(buId, updateBuDto));
  }

  @RequirePermissions(BuPermissions.DELETE_BU)
  @Delete(':buId')
  async delete(@Param('buId') buId: number): Promise<number> {
    return this.buService.deleteEntity(buId);
  }
}
