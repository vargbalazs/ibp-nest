import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';
import { UserModel } from '../users/entities/user.entity';

export class RoleGroupRepository
  extends TypeOrmRepository<RoleGroupModel>
  implements RoleGroupModelRepository
{
  private userRepository = this.dataSource.manager.getRepository(UserModel);

  async assignToUser(roleGroupId: number, userId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });
    // using objects is too slow, that's why the raw query
    await this.dataSource.manager.query(
      'INSERT INTO users_rolegroups VALUES($1, $2)',
      [user.id, roleGroupId],
    );

    return true;
  }

  async removeFromUser(roleGroupId: number, userId: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });
    // using objects is too slow, that's why the raw query
    await this.dataSource.manager.query(
      'DELETE FROM users_rolegroups WHERE users_id=$1 AND rolegroups_id=$2',
      [user.id, roleGroupId],
    );

    return true;
  }

  async findRoleGroupWithUsers(roleGroupId: number): Promise<RoleGroupModel> {
    return await this.findOne({
      where: { id: roleGroupId },
      relations: { users: true },
      loadEagerRelations: false,
    });
  }
}
