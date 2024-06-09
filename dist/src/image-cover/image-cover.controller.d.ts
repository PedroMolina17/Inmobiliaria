/// <reference types="multer" />
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
export declare class ImageCoverController {
    private readonly imageCoverService;
    constructor(imageCoverService: ImageCoverService);
    postImageCover(file: Express.Multer.File, body: CreateImageCoverDto): Promise<any>;
    findAllImageCover(): any;
    findOne(id: number): Promise<any>;
    putImageCover(file: Express.Multer.File, body: CreateImageCoverDto, id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
