import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateModuleDto } from 'src/models/modules/dto/update-module.dto';
import { UpdateSubModuleDto } from 'src/models/sub-modules/dto/update-sub-module.dto';

export class CreateOperationDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateModuleDto)
  module: UpdateModuleDto;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateSubModuleDto)
  subModule: UpdateSubModuleDto;
}
