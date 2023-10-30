import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { PassportRequest } from './interfaces/passport-request.interface';
import { Response } from 'express';
import { RefreshTokenCookieGuard } from './guards/refresh-token-cookie.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.login(
      loginDto.userEmail,
      loginDto.password,
    );
    this.authService.storeTokenInCookie(
      res,
      tokens.accessToken,
      tokens.refreshToken,
    );
  }

  @Get('logout')
  async logout(
    @Req() req: PassportRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(req.user.sub);
    this.authService.clearTokensFromCookie(res);
  }

  @Public()
  //@UseGuards(RefreshTokenGuard)
  @UseGuards(RefreshTokenCookieGuard)
  @Get('refresh')
  async refreshTokens(
    @Req() req: PassportRequest,
    @Res({ passthrough: true }) res: Response,
  ) {
    const userId = req.user.sub;
    const refreshToken = req.user.refreshToken;
    const tokens = await this.authService.refreshTokens(userId, refreshToken);
    this.authService.storeTokenInCookie(
      res,
      tokens.accessToken,
      tokens.refreshToken,
    );
  }

  @Public()
  @Get('forgotpwd')
  async forgotPassword(
    @Query('user-email') userEmail: string,
  ): Promise<boolean> {
    return await this.authService.generateNewPassword(userEmail);
  }
}
