import { Module } from '@nestjs/common';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { JwtConfigModule } from 'src/config/jwt/config.module';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { AccessTokenGuard } from './guards/access-token.guard';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { AccessTokenCookieStrategy } from './strategies/access-token-cookie.strategy';
import { AccessTokenCookieGuard } from './guards/access-token-cookie.guard';
import { RefreshTokenCookieStrategy } from './strategies/refresh-token-cookie.strategy';
import { CookieConfigService } from 'src/config/cookie/config.service';
import { CookieConfigModule } from 'src/config/cookie/config.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [JwtConfigModule],
      useFactory: async (configService: JwtConfigService) => ({
        global: true,
        secret: configService.accessSecret,
        signOptions: { expiresIn: configService.accessExpiresIn },
      }),
      inject: [JwtConfigService],
    }),
    //ConfigModule,
    PassportModule,
    //MailModule,
    CookieConfigModule,
  ],
  providers: [
    AuthService,
    JwtConfigService,
    CookieConfigService,
    {
      provide: APP_GUARD,
      useClass: AccessTokenCookieGuard /*AccessTokenGuard*/,
    },
    //AccessTokenStrategy,
    AccessTokenCookieStrategy,
    RefreshTokenCookieStrategy,
    //RefreshTokenStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
