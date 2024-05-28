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
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ImageCoverClient<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateImageCoverDto): import(".prisma/client").Prisma.Prisma__ImageCoverClient<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
}
