import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { BaseEntityDto } from 'src/models/base/base-entity.dto';

export class CreateSubModuleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BaseEntityDto)
  module: BaseEntityDto;
}
