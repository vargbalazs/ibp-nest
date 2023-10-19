import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/models/users/entities/user.entity';
import { UserService } from 'src/models/users/users.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(userEmail: string, password: string): Promise<User> {
    const user = await this.userService.findByUserEmail(userEmail);
    const authenticated = await bcryptjs.compare(password, user.password);

    if (!authenticated) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
