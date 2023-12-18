import { Module } from '@nestjs/common';
import { BusModule } from './bu/bus.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [BusModule, CustomersModule],
})
export class MasterDataModule {}
