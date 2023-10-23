import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleModel } from './entities/module.entity';
import { ModuleService } from './modules.service';
import { ModuleController } from './modules.controller';
import { ModuleRepository } from './modules.repository';
import { ModuleModelRepository } from './interfaces/repository.interface';
import { ModuleEntity } from './serializers/Module.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleModel])],
  providers: [
    ModuleService,
    { provide: ENTITY, useValue: ModuleModel },
    { provide: ModuleModelRepository, useClass: ModuleRepository },
    { provide: SERIALIZER, useValue: ModuleEntity },
  ],
  controllers: [ModuleController],
})
export class ModulesModule {}
