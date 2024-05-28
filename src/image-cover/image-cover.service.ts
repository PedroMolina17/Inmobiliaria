import { Injectable } from '@nestjs/common';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageCoverService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateImageCoverDto) {
    return this.prisma.imageCover.create({ data: data });
  }

  findAll() {
    return this.prisma.imageCover.findMany();
  }

  findOne(id: number) {
    return this.prisma.imageCover.findUnique({ where: { idImageCover: id } });
  }

  update(id: number, data: UpdateImageCoverDto) {
    return this.prisma.imageCover.update({ where: { idImageCover: id }, data });
  }

  async remove(id: number) {
    return this.prisma.imageCover.delete({ where: { idImageCover: id } });
  }
}
