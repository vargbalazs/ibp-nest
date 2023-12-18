import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends CreateCustomerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
