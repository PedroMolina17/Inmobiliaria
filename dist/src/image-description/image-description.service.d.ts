import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageDescriptionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateImageDescriptionDto): any;
    findAll(): any;
    findOne(id: number): any;
    findByImageCover(idImageCover: number): any;
    update(id: number, data: UpdateImageDescriptionDto): any;
    remove(id: number): any;
}
