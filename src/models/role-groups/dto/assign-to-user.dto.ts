import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AssignToUserDto {
  @IsNotEmpty()
  @IsNumber()
  roleGroupId: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
