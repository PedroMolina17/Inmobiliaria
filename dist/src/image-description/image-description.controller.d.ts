/// <reference types="multer" />
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
export declare class ImageDescriptionController {
    private readonly imageDescriptionService;
    constructor(imageDescriptionService: ImageDescriptionService);
    postImageDescription(file: Express.Multer.File, body: CreateImageDescriptionDto): Promise<any>;
    findAll(idImageCover: number): any;
    findOne(id: number): any;
    update(id: string, updateImageDescriptionDto: UpdateImageDescriptionDto): any;
    remove(id: number): any;
}
