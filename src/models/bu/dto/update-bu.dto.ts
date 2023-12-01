import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateBuDto } from './create-bu.dto';

export class UpdateBuDto extends CreateBuDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
