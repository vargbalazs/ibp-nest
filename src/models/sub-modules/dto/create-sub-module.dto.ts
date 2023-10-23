import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubModuleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  moduleId: number;
}
