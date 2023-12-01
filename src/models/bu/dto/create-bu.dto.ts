import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBuDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
