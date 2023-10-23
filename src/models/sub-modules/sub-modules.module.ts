import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubModuleModel } from './entities/sub-module.entity';
import { SubModuleService } from './sub-modules.service';
import { SubModuleController } from './sub-modules.controller';
import { SubModuleRepository } from './sub-modules.repository';
import { SubModuleModelRepository } from './interfaces/repository.interface';
import { SubModuleEntity } from './serializers/sub-module.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([SubModuleModel])],
  providers: [
    SubModuleService,
    { provide: ENTITY, useValue: SubModuleModel },
    { provide: SubModuleModelRepository, useClass: SubModuleRepository },
    { provide: SERIALIZER, useValue: SubModuleEntity },
  ],
  controllers: [SubModuleController],
})
export class SubModulesModule {}
