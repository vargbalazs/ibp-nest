import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendNewPassword(userEmail: string, password: string) {
    await this.mailerService.sendMail({
      to: userEmail,
      subject: 'Password reset',
      template: './forgotpwd',
      context: {
        password: password,
      },
    });
  }

  async sendInitialPassword(userEmail: string, password: string) {
    await this.mailerService.sendMail({
      to: userEmail,
      subject: 'Initial password',
      template: './signup',
      context: {
        password: password,
      },
    });
  }
}
