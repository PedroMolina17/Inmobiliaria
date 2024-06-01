import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateImageDescriptionDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  idImageCover: number;

  imageUrl: string;
}
