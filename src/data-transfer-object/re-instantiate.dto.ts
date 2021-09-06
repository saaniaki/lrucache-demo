import { IsInt, Min } from 'class-validator';

export class ReInstantiateDto {
  @IsInt({ message: "'Capacity' must be a valid integer." })
  @Min(1, { message: "'Capacity' must be greater than or equal to one." })
  public capacity: number;
}
