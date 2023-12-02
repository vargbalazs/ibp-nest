import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RouteService } from './routes.service';
import { RouteEntity } from './serializers/route.serializer';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get()
  async getRoutes(): Promise<RouteEntity[]> {
    const routes = await this.routeService.findAll();
    return routes.map((route) => new RouteEntity(route));
  }

  @Get(':routeId')
  async getRoute(@Param('routeId') routeId: number): Promise<RouteEntity> {
    return new RouteEntity(await this.routeService.findById(routeId));
  }

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto): Promise<RouteEntity> {
    return new RouteEntity(
      await this.routeService.createEntity(createRouteDto),
    );
  }

  @Put(':routeId')
  async update(
    @Param('routeId') routeId: number,
    @Body() updateRouteDto: UpdateRouteDto,
  ): Promise<RouteEntity> {
    return new RouteEntity(
      await this.routeService.updateEntity(routeId, updateRouteDto),
    );
  }

  @Delete(':routeId')
  async delete(@Param('routeId') routeId: number): Promise<number> {
    return this.routeService.deleteEntity(routeId);
  }
}
