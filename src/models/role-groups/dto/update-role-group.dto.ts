import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateRoleGroupDto } from './create-role-group.dto';

export class UpdateRoleGroupDto extends CreateRoleGroupDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
