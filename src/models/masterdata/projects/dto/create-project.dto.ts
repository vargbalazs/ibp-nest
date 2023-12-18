import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateCustomerDto } from '../../customers/dto/update-customer.dto';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateCustomerDto)
  customer: UpdateCustomerDto;
}
