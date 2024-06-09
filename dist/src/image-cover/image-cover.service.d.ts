import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ImageCoverService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateImageCoverDto): Promise<any>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, data: UpdateImageCoverDto): any;
    remove(id: number): Promise<any>;
}
