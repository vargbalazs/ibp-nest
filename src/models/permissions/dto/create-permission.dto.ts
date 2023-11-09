import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateActionDto } from 'src/models/actions/dto/update-action.dto';
import { BaseEntityDto } from 'src/models/base/base-entity.dto';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BaseEntityDto)
  operation: BaseEntityDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateActionDto)
  action: UpdateActionDto;
}
