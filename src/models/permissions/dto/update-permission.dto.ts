import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePermissionDto } from './create-permission.dto';

export class UpdatePermissionDto extends CreatePermissionDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
