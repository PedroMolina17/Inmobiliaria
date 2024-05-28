import { IsNotEmpty, Min, MinLength, IsString } from 'class-validator';

export class CreateImageCoverDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string;

  imageUrl: string;
}
