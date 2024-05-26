import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { TypeUser } from '@prisma/client';

@Controller('type-users')
export class TypeUsersController {
  constructor(private readonly typeUsersService: TypeUsersService) {}

  @Post()
  createTypeUser(@Body() data: TypeUser) {
    return this.typeUsersService.create(data);
  }

  @Get()
  async getAllTypeUsers() {
    return this.typeUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeUsersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: TypeUser) {
    return this.typeUsersService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.typeUsersService.remove(Number(id));
  }
}
