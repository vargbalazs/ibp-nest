import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MasterDataModule } from './masterdata/masterdata.module';

@Module({
  imports: [AdminModule, MasterDataModule],
})
export class ModelsModule {}
