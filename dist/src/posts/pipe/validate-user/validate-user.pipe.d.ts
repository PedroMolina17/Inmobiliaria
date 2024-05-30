import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateUserPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): {
        value: any;
        age: number;
    };
}
