import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ChangePwdDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}
