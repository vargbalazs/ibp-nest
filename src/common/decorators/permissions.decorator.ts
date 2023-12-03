import { SetMetadata } from '@nestjs/common';
import Permissions from 'src/authentication/permissions/permissions.type';

export const PERMISSIONS_KEY = 'permissions';
export const RequirePermissions = (...permissions: Permissions[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
