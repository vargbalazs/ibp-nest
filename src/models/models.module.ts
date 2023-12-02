import { Module } from '@nestjs/common';
import { BusModule } from './masterdata/bu/bus.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AdminModule, BusModule],
})
export class ModelsModule {}
