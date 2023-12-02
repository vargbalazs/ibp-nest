import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends CreateRoleDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
