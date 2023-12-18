import { Module } from '@nestjs/common';
import { BusModule } from './bu/bus.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [BusModule, CustomersModule, ProjectsModule],
})
export class MasterDataModule {}
