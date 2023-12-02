import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SimpleModuleDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
