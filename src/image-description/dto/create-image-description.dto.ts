import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateImageDescriptionDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  idImageCover: number;

  imageUrl: string;
}
