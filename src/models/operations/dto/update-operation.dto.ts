import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateOperationDto } from './create-operation.dto';

export class UpdateOperationDto extends CreateOperationDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
