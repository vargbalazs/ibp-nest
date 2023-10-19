import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/models/users/serializers/user.serializer';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<UserEntity> {
    return new UserEntity(
      await this.authService.login(loginDto.userEmail, loginDto.password),
    );
  }
}
