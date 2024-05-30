import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateImageDescriptionDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  idImageCover: number;

  imageUrl: string;
}
