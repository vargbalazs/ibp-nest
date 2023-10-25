import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { BaseEntityDto } from 'src/models/base/base-entity.dto';

export class AssignToRoleGroupDto {
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => BaseEntityDto)
  roleGroup: BaseEntityDto;
}
