import { BaseRepository } from 'src/models/base/base-repository.interface';
import { ProjectModel } from '../entities/project.entitiy';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

export interface ProjectModelRepository
  extends BaseRepository<ProjectModel, CreateProjectDto, UpdateProjectDto> {}

export const ProjectModelRepository = Symbol('ProjectModelRepository');
