import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssignToRoleGroupDto {
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @IsNotEmpty()
  @IsNumber()
  roleGroupId: number;
}
