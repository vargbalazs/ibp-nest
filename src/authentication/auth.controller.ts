import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto.userEmail, loginDto.password);
  }

  @Get('logout')
  logout(@Req() req: any) {
    this.authService.logout(req.user['sub']);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: any) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user; //'user profile';
  }
}
