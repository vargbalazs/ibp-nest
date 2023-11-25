import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UpdateSubModuleDto } from 'src/models/sub-modules/dto/update-sub-module.dto';

export class ModuleNoSubModulesDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  // @IsNotEmpty()
  // subModules: UpdateSubModuleDto[];
}
