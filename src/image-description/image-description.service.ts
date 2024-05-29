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
    return `This action returns all imageDescription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageDescription`;
  }

  update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto) {
    return `This action updates a #${id} imageDescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageDescription`;
  }
}
