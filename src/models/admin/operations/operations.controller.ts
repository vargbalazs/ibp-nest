import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OperationService } from './operations.service';
import { OperationEntity } from './serializers/operation.serializer';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';

@Controller('operations')
@RequirePermissions(AdminPermissions.ADMIN)
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @Get('with-permissions')
  async getWithPermissions(): Promise<OperationEntity[]> {
    const operations =
      await this.operationService.findOperationsWithPermissions();
    return operations.map((operation) => new OperationEntity(operation));
  }

  @Get('with-submodules')
  async getWithSubModules(): Promise<OperationEntity[]> {
    const operations =
      await this.operationService.findOperationsWithSubModules();
    return operations.map((operation) => new OperationEntity(operation));
  }

  @Get('with-details/:operationId')
  async getWithDetails(
    @Param('operationId') operationId: number,
  ): Promise<OperationEntity> {
    return new OperationEntity(
      await this.operationService.findOperationDetails(operationId),
    );
  }

  @Get()
  async getOperations(): Promise<OperationEntity[]> {
    const operations = await this.operationService.findAll();
    return operations.map((operation) => new OperationEntity(operation));
  }

  @Get(':operationId')
  async getOperation(
    @Param('operationId') operationId: number,
  ): Promise<OperationEntity> {
    return new OperationEntity(
      await this.operationService.findById(operationId),
    );
  }

  @Post()
  async create(
    @Body() createOperationDto: CreateOperationDto,
  ): Promise<OperationEntity> {
    return new OperationEntity(
      await this.operationService.createEntity(createOperationDto),
    );
  }

  @Put(':operationId')
  async update(
    @Param('operationId') operationId: number,
    @Body() updateOperationDto: UpdateOperationDto,
  ): Promise<OperationEntity> {
    return new OperationEntity(
      await this.operationService.updateEntity(operationId, updateOperationDto),
    );
  }

  @Delete(':operationId')
  async delete(@Param('operationId') operationId: number): Promise<number> {
    return this.operationService.deleteEntity(operationId);
  }
}
