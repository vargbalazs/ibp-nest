import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleGroupDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
