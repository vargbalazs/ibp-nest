import { Module } from '@nestjs/common';
import { RoleGroupsModule } from './role-groups/role-groups.module';
import { UsersModule } from './users/users.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [UsersModule, RoleGroupsModule, ActionsModule],
})
export class ModelsModule {}
