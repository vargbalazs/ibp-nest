import { RoleGroupModel } from './entities/role-group.entity';
import { RoleGroupModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../../type-orm.repository';
import { UserModel } from '../users/entities/user.entity';
import { RouteModel } from '../routes/entities/route.entity';

export class RoleGroupRepository
  extends TypeOrmRepository<RoleGroupModel>
  implements RoleGroupModelRepository
{
  private userRepository = this.dataSource.manager.getRepository(UserModel);
  private routeRepository = this.dataSource.manager.getRepository(RouteModel);

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

  async findRoleGroupsWithPermissions(): Promise<RoleGroupModel[]> {
    return await this.find({ relations: { roles: { permissions: true } } });
  }

  async assignToRoute(roleGroupId: number, routeId: number): Promise<boolean> {
    const route = await this.routeRepository.findOne({
      where: { id: routeId },
    });

    await this.dataSource.manager.query(
      'INSERT INTO routes_rolegroups VALUES($1, $2)',
      [route.id, roleGroupId],
    );

    return true;
  }

  async removeFromRoute(
    roleGroupId: number,
    routeId: number,
  ): Promise<boolean> {
    const route = await this.routeRepository.findOne({
      where: { id: routeId },
    });

    await this.dataSource.manager.query(
      'DELETE FROM routes_rolegroups WHERE routes_id=$1 AND rolegroups_id=$2',
      [route.id, roleGroupId],
    );

    return true;
  }
}
