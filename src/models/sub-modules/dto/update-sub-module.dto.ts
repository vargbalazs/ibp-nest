import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSubModuleDto } from './create-sub-module.dto';

export class UpdateSubModuleDto extends CreateSubModuleDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
