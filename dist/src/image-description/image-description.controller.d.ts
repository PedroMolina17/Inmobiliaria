/// <reference types="multer" />
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
export declare class ImageDescriptionController {
    private readonly imageDescriptionService;
    constructor(imageDescriptionService: ImageDescriptionService);
    postImageCover(file: Express.Multer.File, body: CreateImageDescriptionDto): Promise<{
        idImageDescription: number;
        description: string;
        imageUrl: string;
        idImageCover: number;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImageDescriptionDto: UpdateImageDescriptionDto): string;
    remove(id: string): string;
}
