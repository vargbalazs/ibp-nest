import { Module } from '@nestjs/common';
import { RoleGroupsModule } from './role-groups/role-groups.module';
import { UsersModule } from './users/users.module';
import { ActionsModule } from './actions/actions.module';
import { ModulesModule } from './modules/modules.module';
import { OperationsModule } from './operations/operations.module';
import { RolesModule } from './roles/roles.module';
import { SubModulesModule } from './sub-modules/sub-modules.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RoutesModule } from './routes/routes.module';
import { ConstraintsModule } from './constraints/constraints.module';

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
    ConstraintsModule,
  ],
})
export class AdminModule {}
