import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  callFromCronJob() {
    console.log('app called from cron job');
  }
}
