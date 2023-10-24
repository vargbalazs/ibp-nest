import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { PassportRequest } from './interfaces/passport-request.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto.userEmail, loginDto.password);
  }

  @Get('logout')
  async logout(@Req() req: PassportRequest) {
    await this.authService.logout(req.user.sub);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(@Req() req: PassportRequest) {
    const userId = req.user.sub;
    const refreshToken = req.user.refreshToken;
    return await this.authService.refreshTokens(userId, refreshToken);
  }

  @Public()
  @Get('forgotpwd')
  async forgotPassword(
    @Query('user-email') userEmail: string,
  ): Promise<boolean> {
    return await this.authService.generateNewPassword(userEmail);
  }
}
