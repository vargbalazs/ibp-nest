import { BaseRepository } from 'src/models/base/base-repository.interface';
import { CustomerModel } from '../entities/customer.entitiy';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

export interface CustomerModelRepository
  extends BaseRepository<CustomerModel, CreateCustomerDto, UpdateCustomerDto> {}

export const CustomerModelRepository = Symbol('CustomerModelRepository');
