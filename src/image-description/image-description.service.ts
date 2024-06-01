import { ImageDescription } from './entities/image-description.entity';
import { Injectable } from '@nestjs/common';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageDescriptionService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateImageDescriptionDto) {
    return this.prisma.imageDescription.create({ data: data });
  }

  findAll() {
    return this.prisma.imageDescription.findMany();
  }

  findOne(id: number) {
    return this.prisma.imageDescription.findUnique({
      where: { idImageDescription: id },
    });
  }

  update(id: number, data: UpdateImageDescriptionDto) {
    return this.prisma.imageDescription.update({
      where: { idImageDescription: id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prisma.imageDescription.delete({
      where: { idImageDescription: id },
    });
  }
}
