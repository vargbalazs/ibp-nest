import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SimpleModuleDto } from 'src/models/modules/dto/simple-module.dto';
import { UpdateSubModuleDto } from 'src/models/sub-modules/dto/update-sub-module.dto';

export class UpdateOperationDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SimpleModuleDto)
  module: SimpleModuleDto;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateSubModuleDto)
  subModule: UpdateSubModuleDto;
}
