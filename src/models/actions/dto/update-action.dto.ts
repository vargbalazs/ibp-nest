import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateActionDto } from './create-action.dto';

export class UpdateActionDto extends CreateActionDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
