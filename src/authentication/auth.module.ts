import { Module } from '@nestjs/common';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from 'src/config/api/config.service';
import { JwtConfigModule } from 'src/config/api/config.module';
import { ConfigModule } from '@nestjs/config';

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
  providers: [AuthService, JwtConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
