import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateActionDto } from './create-permission.dto';

export class UpdateActionDto extends CreateActionDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
