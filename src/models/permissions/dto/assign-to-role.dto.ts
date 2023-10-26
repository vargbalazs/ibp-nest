import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssignToRoleDto {
  @IsNotEmpty()
  @IsNumber()
  permissionId: number;

  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
