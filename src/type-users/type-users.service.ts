import { Injectable } from '@nestjs/common';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeUser } from '@prisma/client';

@Injectable()
export class TypeUsersService {
  constructor(private prisma: PrismaService) {}

  create(data: TypeUser) {
    return this.prisma.typeUser.create({ data: data });
  }

  async findAll(): Promise<TypeUser[]> {
    return this.prisma.typeUser.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} typeUser`;
  }

  update(id: number, updateTypeUserDto: UpdateTypeUserDto) {
    return `This action updates a #${id} typeUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeUser`;
  }
}
