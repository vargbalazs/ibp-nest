import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UpdateSubModuleDto } from 'src/models/sub-modules/dto/update-sub-module.dto';

export class ModuleForPermissionDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  subModules: UpdateSubModuleDto[];
}
