import { BadRequestException } from '@nestjs/common';

export class PasswordsNotMatchException extends BadRequestException {
  constructor() {
    super(`Passwords don't match`);
  }
}
