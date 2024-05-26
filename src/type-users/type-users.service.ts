import { Injectable } from '@nestjs/common';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeUser } from '@prisma/client';

@Injectable()
export class TypeUsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTypeUserDto) {
    return this.prisma.typeUser.create({ data: data });
  }

  async findAll(): Promise<TypeUser[]> {
    return this.prisma.typeUser.findMany();
  }

  async findOne(id: number): Promise<TypeUser> {
    return this.prisma.typeUser.findUnique({ where: { idTypeUser: id } });
  }

  async update(id: number, data: TypeUser): Promise<UpdateTypeUserDto> {
    return this.prisma.typeUser.update({ where: { idTypeUser: id }, data });
  }

  async remove(id: number): Promise<TypeUser> {
    return this.prisma.typeUser.delete({ where: { idTypeUser: id } });
  }
}
