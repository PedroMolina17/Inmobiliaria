/// <reference types="multer" />
import { ImageCoverService } from './image-cover.service';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    uploadFile(file: Express.Multer.File, body: any): Promise<{
        idImageCover: number;
        description: string;
        imageUrl: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImageCoverDto: UpdateImageCoverDto): string;
    remove(id: string): string;
}
