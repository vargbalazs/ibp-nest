import { BadRequestException, HttpStatus } from '@nestjs/common';

export class EmailNotExistsException extends BadRequestException {
  constructor() {
    super('No such email exists');
  }
}
