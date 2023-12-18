import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customers.service';
import { CustomerEntity } from './serializers/customer.serializer';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import CustomerPermissions from 'src/authentication/permissions/customer-permissions.enum';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @RequirePermissions(CustomerPermissions.VIEW_CUSTOMER)
  async getCustomers(): Promise<CustomerEntity[]> {
    const customers = await this.customerService.findAll();
    return customers.map((customer) => new CustomerEntity(customer));
  }

  @RequirePermissions(CustomerPermissions.VIEW_CUSTOMER)
  @Get(':customerId')
  async getCustomer(
    @Param('customerId') customerId: number,
  ): Promise<CustomerEntity> {
    return new CustomerEntity(await this.customerService.findById(customerId));
  }

  @RequirePermissions(CustomerPermissions.CREATE_CUSTOMER)
  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CustomerEntity> {
    return new CustomerEntity(
      await this.customerService.createEntity(createCustomerDto),
    );
  }

  @RequirePermissions(CustomerPermissions.EDIT_CUSTOMER)
  @Put(':customerId')
  async update(
    @Param('customerId') customerId: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerEntity> {
    return new CustomerEntity(
      await this.customerService.updateEntity(customerId, updateCustomerDto),
    );
  }

  @RequirePermissions(CustomerPermissions.DELETE_CUSTOMER)
  @Delete(':customerId')
  async delete(@Param('customerId') customerId: number): Promise<number> {
    return this.customerService.deleteEntity(customerId);
  }
}
