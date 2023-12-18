import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModel } from './entities/project.entitiy';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { ProjectRepository } from './projects.repository';
import { ProjectModelRepository } from './interfaces/repository.interface';
import { ProjectEntity } from './serializers/project.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectModel])],
  providers: [
    ProjectService,
    { provide: ENTITY, useValue: ProjectModel },
    { provide: ProjectModelRepository, useClass: ProjectRepository },
    { provide: SERIALIZER, useValue: ProjectEntity },
  ],
  controllers: [ProjectController],
})
export class ProjectsModule {}
