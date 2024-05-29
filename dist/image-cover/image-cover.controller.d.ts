/// <reference types="multer" />
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    postImageCover(file: Express.Multer.File, body: CreateImageCoverDto): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
    findAllImageCover(): import(".prisma/client").Prisma.PrismaPromise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }[]>;
    findOne(id: number): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
    putImageCover(file: Express.Multer.File, body: CreateImageCoverDto, id: string): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
    remove(id: string): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
}
