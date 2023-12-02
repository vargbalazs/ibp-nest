import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
