import { IsString, MinLength } from 'class-validator';

export class CreateTypeUserDto {
  idTypeUser: number;

  @IsString()
  @MinLength(3)
  description: string;
}
