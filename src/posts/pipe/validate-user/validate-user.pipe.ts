import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber = parseInt(value.age.tostring(), 10);
    if (isNaN(ageNumber)) {
      throw new HttpException('Invalid age number ', HttpStatus.BAD_REQUEST);
    }

    return { value, age: ageNumber };
  }
}
