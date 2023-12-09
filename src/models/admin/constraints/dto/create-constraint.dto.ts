import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConstraintDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
