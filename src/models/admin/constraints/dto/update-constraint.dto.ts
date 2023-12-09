import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateConstraintDto } from './create-constraint.dto';

export class UpdateConstraintDto extends CreateConstraintDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
