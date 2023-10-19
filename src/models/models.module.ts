import { Module } from '@nestjs/common';
import { RoleGroupsModule } from './role-groups/role-groups.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, RoleGroupsModule],
})
export class ModelsModule {}
