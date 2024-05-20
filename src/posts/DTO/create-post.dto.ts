import { IsNumber, IsString, MinLength } from 'class-validator';
export class CreatePost {
  @IsNumber()
  id: Number;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  description: string;
}
