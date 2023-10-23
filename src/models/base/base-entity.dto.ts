import { IsNotEmpty, IsNumber } from 'class-validator';

export class BaseEntityDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
