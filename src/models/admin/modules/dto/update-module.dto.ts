import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateModuleDto } from './create-module.dto';

export class UpdateModuleDto extends CreateModuleDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
