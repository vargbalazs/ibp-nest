import { Module } from '@nestjs/common';
import { BusModule } from './bu/bus.module';

@Module({
  imports: [BusModule],
})
export class MasterDataModule {}
