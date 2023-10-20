import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from 'src/models/users/entities/user.entity';
import { UserService } from 'src/models/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userEmail: string, password: string) {
    const user = await this.userService.findByUserEmail(userEmail);
    const authenticated = await bcryptjs.compare(
      password,
      user ? user.password : '',
    );

    if (!user || !authenticated) {
      throw new UnauthorizedException('Wrong user email or password');
    }

    const payload = {
      sub: user.userId,
      username: user.userName,
      useremail: user.userEmail,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken: accessToken };
  }
}
