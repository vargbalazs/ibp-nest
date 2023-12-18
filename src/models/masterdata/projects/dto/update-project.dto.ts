import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends CreateProjectDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
