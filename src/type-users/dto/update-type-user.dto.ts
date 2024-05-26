import { IsString, IsNumber, MinLength } from 'class-validator';

export class UpdateTypeUserDto {
  idTypeUser: number;

  @IsString()
  @MinLength(1)
  description: string;
}
