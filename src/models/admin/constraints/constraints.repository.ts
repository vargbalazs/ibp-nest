import { ConstraintModel } from './entities/constraint.entity';
import { ConstraintModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../base/type-orm.repository';
import { DeepPartial } from 'typeorm';
import { UserModel } from '../users/entities/user.entity';
import { CreateConstraintDto } from './dto/create-constraint.dto';

export class ConstraintRepository
  extends TypeOrmRepository<ConstraintModel>
  implements ConstraintModelRepository
{
  private userRepository = this.dataSource.manager.getRepository(UserModel);

  override async createEntity(
    entity: CreateConstraintDto,
  ): Promise<ConstraintModel> {
    const user = await this.userRepository.findOne({
      where: { userId: entity.userId },
    });

    const newConstraint = this.create(entity);

    newConstraint.user = user;

    return this.save(newConstraint);
  }

  override async findAll(): Promise<ConstraintModel[]> {
    return this.find({
      relations: { role: true },
      loadEagerRelations: false,
    });
  }

  override async findById(id: number): Promise<ConstraintModel> {
    return this.findOne({
      where: { id: id },
      relations: { role: true },
      loadEagerRelations: false,
    });
  }
}
