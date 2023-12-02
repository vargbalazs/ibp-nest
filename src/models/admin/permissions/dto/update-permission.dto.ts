import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateActionDto } from 'src/models/admin/actions/dto/update-action.dto';
import { SimpleModuleDto } from 'src/models/admin/modules/dto/simple-module.dto';
import { OperationForPermissionDto } from 'src/models/admin/operations/dto/operation-for-permission.dto';
import { UpdateSubModuleDto } from 'src/models/admin/sub-modules/dto/update-sub-module.dto';

export class UpdatePermissionDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => OperationForPermissionDto)
  operation: OperationForPermissionDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateActionDto)
  action: UpdateActionDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SimpleModuleDto)
  module: SimpleModuleDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateSubModuleDto)
  subModule: UpdateSubModuleDto;
}
