import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageDescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateImageDescriptionDto): import(".prisma/client").Prisma.Prisma__ImageDescriptionClient<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImageDescriptionDto: UpdateImageDescriptionDto): string;
    remove(id: number): string;
}
