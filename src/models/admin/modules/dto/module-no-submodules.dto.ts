import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UpdateSubModuleDto } from 'src/models/admin/sub-modules/dto/update-sub-module.dto';

export class ModuleNoSubModulesDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  subModules: UpdateSubModuleDto[];
}
