import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActionService } from './actions.service';
import { ActionEntity } from './serializers/action.serializer';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';

@Controller('actions')
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get()
  async getActions(): Promise<ActionEntity[]> {
    const actions = await this.actionService.findAll();
    return actions.map((action) => new ActionEntity(action));
  }

  @Get(':actionId')
  async getAction(@Param('actionId') actionId: number): Promise<ActionEntity> {
    return new ActionEntity(await this.actionService.findById(actionId));
  }

  @Post()
  async create(
    @Body() createActionDto: CreateActionDto,
  ): Promise<ActionEntity> {
    return new ActionEntity(
      await this.actionService.createEntity(createActionDto),
    );
  }

  @Put(':actionId')
  async update(
    @Param('actionId') actionId: number,
    @Body() updateActionDto: UpdateActionDto,
  ): Promise<ActionEntity> {
    return new ActionEntity(
      await this.actionService.updateEntity(actionId, updateActionDto),
    );
  }

  @Delete(':actionId')
  async delete(@Param('actionId') actionId: number): Promise<boolean> {
    return this.actionService.deleteEntity(actionId);
  }
}
