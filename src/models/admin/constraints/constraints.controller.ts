import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import AdminPermissions from 'src/authentication/permissions/admin-permissions.enum';
import { RequirePermissions } from 'src/common/decorators/permissions.decorator';
import { CreateConstraintDto } from './dto/create-constraint.dto';
import { ConstraintEntity } from './serializers/constraint.serializer';
import { ConstraintService } from './constraints.service';
import { UpdateConstraintDto } from './dto/update-constraint.dto';

@Controller('constraints')
@RequirePermissions(AdminPermissions.ADMIN)
export class ConstraintController {
  constructor(private readonly constraintService: ConstraintService) {}

  @Get()
  async getConstraints(): Promise<ConstraintEntity[]> {
    const constraints = await this.constraintService.findAll();
    return constraints.map((constraint) => new ConstraintEntity(constraint));
  }

  @Get(':constraintId')
  async getConstraint(
    @Param('constraintId') constraintId: number,
  ): Promise<ConstraintEntity> {
    return new ConstraintEntity(
      await this.constraintService.findById(constraintId),
    );
  }

  @Post()
  async create(
    @Body() createConstraintDto: CreateConstraintDto,
  ): Promise<ConstraintEntity> {
    return new ConstraintEntity(
      await this.constraintService.createEntity(createConstraintDto),
    );
  }

  @Put(':constraintId')
  async update(
    @Param('constraintId') constraintId: number,
    @Body() updateConstraintDto: UpdateConstraintDto,
  ): Promise<ConstraintEntity> {
    return new ConstraintEntity(
      await this.constraintService.updateEntity(
        constraintId,
        updateConstraintDto,
      ),
    );
  }

  @Delete(':constraintId')
  async delete(@Param('constraintId') constraintId: number): Promise<number> {
    return this.constraintService.deleteEntity(constraintId);
  }
}
