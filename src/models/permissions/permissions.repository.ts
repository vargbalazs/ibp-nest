import { PermissionModel } from './entities/permission.entity';
import { PermissionModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class PermissionRepository
  extends TypeOrmRepository<PermissionModel>
  implements PermissionModelRepository
{
  async assignToRole(permissionId: number, roleId: number): Promise<boolean> {
    // using objects is too slow, that's why the raw query
    await this.dataSource.manager.query(
      'INSERT INTO roles_permissions VALUES($1, $2)',
      [roleId, permissionId],
    );

    return true;
  }

  async removeFromRole(permissionId: number, roleId: number): Promise<boolean> {
    // using objects is too slow, that's why the raw query
    await this.dataSource.manager.query(
      'DELETE FROM roles_permissions WHERE roles_id=$1 AND permissions_id=$2',
      [roleId, permissionId],
    );

    return true;
  }

  async findPermissionWithRoles(
    permissionId: number,
  ): Promise<PermissionModel> {
    return await this.findOne({
      where: { id: permissionId },
      relations: { roles: true, operation: true },
      loadEagerRelations: false,
    });
  }

  async findPermissionsWithDetails(): Promise<PermissionModel[]> {
    return await this.find({ relations: { operation: { subModule: true } } });
  }
}
