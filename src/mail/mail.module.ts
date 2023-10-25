import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { MailConfigService } from 'src/config/mail/config.service';
import { MailConfigModule } from 'src/config/mail/config.module';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [MailConfigModule],
      useFactory: async (mailConfigService: MailConfigService) => ({
        transport: {
          host: mailConfigService.host,
          secure: false,
          auth: {
            user: mailConfigService.user,
            pass: mailConfigService.password,
          },
        },
        defaults: {
          from: `No reply <${mailConfigService.from}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [MailConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
