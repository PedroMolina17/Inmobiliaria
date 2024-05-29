import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDescriptionDto } from './create-image-description.dto';

export class UpdateImageDescriptionDto extends PartialType(CreateImageDescriptionDto) {}
