import { IsNotEmpty, IsNumber } from 'class-validator';

export class AssignToRouteDto {
  @IsNotEmpty()
  @IsNumber()
  roleGroupId: number;

  @IsNotEmpty()
  @IsNumber()
  routeId: number;
}
