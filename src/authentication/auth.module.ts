import { Module } from '@nestjs/common';
import { UsersModule } from 'src/models/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ApiConfigService } from 'src/config/api/config.service';
import { ApiConfigModule } from 'src/config/api/config.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ApiConfigModule],
      useFactory: async (configService: ApiConfigService) => ({
        global: true,
        secret: configService.secret,
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ApiConfigService],
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
