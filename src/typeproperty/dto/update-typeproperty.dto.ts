import { PartialType } from '@nestjs/mapped-types';
import { CreateTypepropertyDto } from './create-typeproperty.dto';

export class UpdateTypepropertyDto extends PartialType(CreateTypepropertyDto) {}
