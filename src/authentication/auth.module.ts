import { Module } from '@nestjs/common';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { JwtConfigModule } from 'src/config/jwt/config.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { AccessTokenGuard } from './guards/access-token.guard';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { MailModule } from 'src/mail/mail.module';

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
    ConfigModule,
    PassportModule,
    MailModule,
  ],
  providers: [
    AuthService,
    JwtConfigService,
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
