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

  update(id: number, data: TypeUser): Promise<TypeUser> {
    return this.prisma.typeUser.update({ where: { idTypeUser: id }, data });
  }

  remove(id: number) {
    return this.prisma.typeUser.delete({ where: { idTypeUser: id } });
  }
}
