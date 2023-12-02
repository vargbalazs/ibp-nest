import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateActionDto } from 'src/models/admin/actions/dto/update-action.dto';
import { ModuleNoSubModulesDto } from 'src/models/admin/modules/dto/module-no-submodules.dto';
import { OperationForPermissionDto } from 'src/models/operations/dto/operation-for-permission.dto';
import { UpdateSubModuleDto } from 'src/models/admin/sub-modules/dto/update-sub-module.dto';

export class CreatePermissionDto {
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
  @Type(() => ModuleNoSubModulesDto)
  module: ModuleNoSubModulesDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateSubModuleDto)
  subModule: UpdateSubModuleDto;
}
