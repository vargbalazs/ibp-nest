import { Inject, Injectable } from '@nestjs/common';
import { ProjectModel } from './entities/project.entitiy';
import { ProjectModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService extends BaseService<
  ProjectModel,
  CreateProjectDto,
  UpdateProjectDto
> {
  constructor(
    @Inject(ProjectModelRepository)
    private readonly ProjectRepository: ProjectModelRepository,
  ) {
    super(ProjectRepository);
  }
}
