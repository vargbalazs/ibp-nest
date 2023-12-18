import { Inject, Injectable } from '@nestjs/common';
import { CustomerModel } from './entities/customer.entitiy';
import { CustomerModelRepository } from './interfaces/repository.interface';
import { BaseService } from '../../base/base-service.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService extends BaseService<
  CustomerModel,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(
    @Inject(CustomerModelRepository)
    private readonly CustomerRepository: CustomerModelRepository,
  ) {
    super(CustomerRepository);
  }
}
