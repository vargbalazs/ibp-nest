import { ProjectModel } from './entities/project.entitiy';
import { ProjectModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../base/type-orm.repository';

export class ProjectRepository
  extends TypeOrmRepository<ProjectModel>
  implements ProjectModelRepository {}
