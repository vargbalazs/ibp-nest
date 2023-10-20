import { Module } from '@nestjs/common';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from 'src/config/jwt/config.service';
import { JwtConfigModule } from 'src/config/jwt/config.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [JwtConfigModule],
      useFactory: async (configService: JwtConfigService) => ({
        global: true,
        secret: configService.secret,
        signOptions: { expiresIn: configService.expiresIn },
      }),
      inject: [JwtConfigService],
    }),
    ConfigModule,
  ],
  providers: [
    AuthService,
    JwtConfigService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
