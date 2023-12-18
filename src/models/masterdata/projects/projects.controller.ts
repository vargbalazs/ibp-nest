import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectEntity } from './serializers/project.serializer';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import ProjectPermissions from 'src/authentication/permissions/project-permissions.enum';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @RequirePermissions(ProjectPermissions.VIEW_PROJECT)
  async getProjects(): Promise<ProjectEntity[]> {
    const projects = await this.projectService.findAll();
    return projects.map((project) => new ProjectEntity(project));
  }

  @RequirePermissions(ProjectPermissions.VIEW_PROJECT)
  @Get(':projectId')
  async getProject(
    @Param('projectId') projectId: number,
  ): Promise<ProjectEntity> {
    return new ProjectEntity(await this.projectService.findById(projectId));
  }

  @RequirePermissions(ProjectPermissions.CREATE_PROJECT)
  @Post()
  async create(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<ProjectEntity> {
    return new ProjectEntity(
      await this.projectService.createEntity(createProjectDto),
    );
  }

  @RequirePermissions(ProjectPermissions.EDIT_PROJECT)
  @Put(':projectId')
  async update(
    @Param('projectId') projectId: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectEntity> {
    return new ProjectEntity(
      await this.projectService.updateEntity(projectId, updateProjectDto),
    );
  }

  @RequirePermissions(ProjectPermissions.DELETE_PROJECT)
  @Delete(':projectId')
  async delete(@Param('projectId') projectId: number): Promise<number> {
    return this.projectService.deleteEntity(projectId);
  }
}
