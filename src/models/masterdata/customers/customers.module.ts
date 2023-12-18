import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModel } from './entities/customer.entitiy';
import { CustomerService } from './customers.service';
import { CustomerController } from './customers.controller';
import { CustomerRepository } from './customers.repository';
import { CustomerModelRepository } from './interfaces/repository.interface';
import { CustomerEntity } from './serializers/customer.serializer';
import {
  ENTITY,
  SERIALIZER,
} from 'src/common/constants/injection-tokens.constant';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerModel])],
  providers: [
    CustomerService,
    { provide: ENTITY, useValue: CustomerModel },
    { provide: CustomerModelRepository, useClass: CustomerRepository },
    { provide: SERIALIZER, useValue: CustomerEntity },
  ],
  controllers: [CustomerController],
})
export class CustomersModule {}
