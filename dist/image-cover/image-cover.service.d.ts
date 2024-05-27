import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageCoverService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateImageCoverDto): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImageCoverDto: UpdateImageCoverDto): string;
    remove(id: number): string;
}
