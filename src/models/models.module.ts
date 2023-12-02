import { Module } from '@nestjs/common';
import { RoleGroupsModule } from './role-groups/role-groups.module';
import { UsersModule } from './users/users.module';
import { ActionsModule } from './admin/actions/actions.module';
import { ModulesModule } from './admin/modules/modules.module';
import { OperationsModule } from './admin/operations/operations.module';
import { RolesModule } from './roles/roles.module';
import { SubModulesModule } from './admin/sub-modules/sub-modules.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RoutesModule } from './routes/routes.module';
import { BusModule } from './bu/bus.module';

@Module({
  imports: [
    UsersModule,
    RoleGroupsModule,
    ActionsModule,
    ModulesModule,
    OperationsModule,
    RolesModule,
    SubModulesModule,
    PermissionsModule,
    RoutesModule,
    BusModule,
  ],
})
export class ModelsModule {}
