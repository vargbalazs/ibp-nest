import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionModel } from './entities/action.entity';
import { ActionService } from './actions.service';
import { ActionController } from './actions.controller';
import { ActionRepository } from './actions.repository';
import { ActionModelRepository } from './interfaces/repository.interface';
import { ActionEntity } from './serializers/action.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([ActionModel])],
  providers: [
    ActionService,
    { provide: ENTITY, useValue: ActionModel },
    { provide: ActionModelRepository, useClass: ActionRepository },
    { provide: SERIALIZER, useValue: ActionEntity },
  ],
  controllers: [ActionController],
})
export class ActionsModule {}
