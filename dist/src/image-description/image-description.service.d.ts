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
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ImageDescriptionClient<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByImageCover(idImageCover: number): import(".prisma/client").Prisma.PrismaPromise<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }[]>;
    update(id: number, data: UpdateImageDescriptionDto): import(".prisma/client").Prisma.Prisma__ImageDescriptionClient<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ImageDescriptionClient<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
