import { RoleModel } from './entities/Role.entity';
import { RoleModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';

export class RoleRepository
  extends TypeOrmRepository<RoleModel>
  implements RoleModelRepository
{
  async assignToRoleGroup(
    roleId: number,
    roleGroupId: number,
  ): Promise<boolean> {
    // const roleModel = await this.findById(roleId);
    // for this to work, we have to add the option 'eager: true' to RoleModel
    // roleModel.roleGroups.push(roleGroup);

    // using objects is too slow, that's why the raw query
    this.dataSource.manager.query(
      'INSERT INTO rolegroups_roles VALUES($1, $2)',
      [roleGroupId, roleId],
    );

    return true;

    // return await this.dataSource.manager.save(roleModel);
  }

  async removeFromRoleGroup(
    roleId: number,
    roleGroupId: number,
  ): Promise<boolean> {
    // using objects is too slow, that's why the raw query
    this.dataSource.manager.query(
      'DELETE FROM rolegroups_roles WHERE rolegroups_id=$1 AND roles_id=$2',
      [roleGroupId, roleId],
    );

    return true;
  }

  async findRoleWithRoleGroups(roleId: number): Promise<RoleModel> {
    return await this.findOne({
      where: { id: roleId },
      relations: { roleGroups: true },
      loadEagerRelations: false,
    });
  }

  async findRoleWithPermissions(roleId: number): Promise<RoleModel> {
    return await this.findOne({
      where: { id: roleId },
      relations: { permissions: true },
      loadEagerRelations: false,
    });
  }
}
