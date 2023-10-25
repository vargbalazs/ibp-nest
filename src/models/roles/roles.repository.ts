import { RoleModel } from './entities/Role.entity';
import { RoleModelRepository } from './interfaces/repository.interface';
import { TypeOrmRepository } from '../type-orm.repository';
import { RoleGroupModel } from '../role-groups/entities/role-group.entity';

export class RoleRepository
  extends TypeOrmRepository<RoleModel>
  implements RoleModelRepository
{
  async assignToRoleGroup(
    roleId: number,
    roleGroup: RoleGroupModel,
  ): Promise<boolean> {
    // const roleModel = await this.findById(roleId);
    // roleModel.roleGroups.push(roleGroup);

    // using objects is too slow, that's why the raw query
    this.dataSource.manager.query(
      'INSERT INTO rolegroups_roles VALUES($1, $2)',
      [roleGroup.id, roleId],
    );

    return true;

    // return await this.dataSource.manager.save(roleModel);
  }

  async removeFromRoleGroup(
    roleId: number,
    roleGroup: RoleGroupModel,
  ): Promise<boolean> {
    // using objects is too slow, that's why the raw query
    this.dataSource.manager.query(
      'DELETE FROM rolegroups_roles WHERE rolegroups_id=$1 AND roles_id=$2',
      [roleGroup.id, roleId],
    );

    return true;
  }
}
