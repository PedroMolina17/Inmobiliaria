import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { TypeUser } from './entities/type-user.entity';
@Controller('type-users')
export class TypeUsersController {
  constructor(private readonly typeUsersService: TypeUsersService) {}

  @Post()
  createTypeUser(@Body() data: CreateTypeUserDto) {
    return this.typeUsersService.create(data);
  }

  @Get()
  async getAllTypeUsers() {
    return this.typeUsersService.findAll();
  }

  @Get(':id')
  async getTypeUserById(@Param('id', ParseIntPipe) id: number) {
    const typeUser = await this.typeUsersService.findOne(id);
    if (!typeUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return typeUser;
  }

  @Put(':id')
  async updateTypeUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTypeUserDto,
  ) {
    try {
      const typeUser = await this.typeUsersService.update(id, data);
      if (!typeUser) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return typeUser;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  @Delete(':id')
  async deleteTypeUser(@Param('id', ParseIntPipe) id: number) {
    try {
      const deletedTypeUser = await this.typeUsersService.remove(id);
      if (!deletedTypeUser) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return deletedTypeUser;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
