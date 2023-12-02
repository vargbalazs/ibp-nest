import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { ModuleNoSubModulesDto } from 'src/models/admin/modules/dto/module-no-submodules.dto';
import { UpdateSubModuleDto } from 'src/models/sub-modules/dto/update-sub-module.dto';

export class CreateOperationDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ModuleNoSubModulesDto)
  module: ModuleNoSubModulesDto;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateSubModuleDto)
  subModule: UpdateSubModuleDto;
}
