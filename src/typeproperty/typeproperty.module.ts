import { Module } from '@nestjs/common';
import { TypepropertyService } from './typeproperty.service';
import { TypepropertyController } from './typeproperty.controller';

@Module({
  controllers: [TypepropertyController],
  providers: [TypepropertyService],
})
export class TypepropertyModule {}
