import BuPermissions from './bu-permissions.enum';
import ProjectPermissions from './project-permissions.enum';

const Permissions = {
  ...ProjectPermissions,
  ...BuPermissions,
};

type Permissions = ProjectPermissions | BuPermissions;

export default Permissions;
