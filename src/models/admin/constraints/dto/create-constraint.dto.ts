import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateRoleDto } from '../../roles/dto/update-role.dto';
import { Type } from 'class-transformer';

export class CreateConstraintDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  objectName: string;

  @IsNotEmpty()
  @IsString()
  objectField: string;

  @IsNotEmpty()
  @IsString()
  objectValue: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateRoleDto)
  role: UpdateRoleDto;
}
