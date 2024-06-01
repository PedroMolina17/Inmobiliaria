/// <reference types="multer" />
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
export declare class ImageDescriptionController {
    private readonly imageDescriptionService;
    constructor(imageDescriptionService: ImageDescriptionService);
    postImageDescription(file: Express.Multer.File, body: CreateImageDescriptionDto): Promise<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }>;
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
    update(id: string, updateImageDescriptionDto: UpdateImageDescriptionDto): import(".prisma/client").Prisma.Prisma__ImageDescriptionClient<{
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
