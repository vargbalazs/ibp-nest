import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateRouteDto } from './create-route.dto';

export class UpdateRouteDto extends CreateRouteDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
