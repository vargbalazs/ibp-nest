import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserModel } from 'src/models/users/entities/user.entity';
import { UserService } from 'src/models/users/users.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(userEmail: string, password: string): Promise<UserModel> {
    const user = await this.userService.findByUserEmail(userEmail);
    const authenticated = await bcryptjs.compare(
      password,
      user ? user.password : '',
    );

    if (!user || !authenticated) {
      throw new UnauthorizedException('Wrong user email or password');
    }

    return user;
  }
}
