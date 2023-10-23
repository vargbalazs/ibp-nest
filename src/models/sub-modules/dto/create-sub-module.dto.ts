import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateModuleDto } from 'src/models/modules/dto/update-module.dto';

export class CreateSubModuleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateModuleDto)
  module: UpdateModuleDto;
}
