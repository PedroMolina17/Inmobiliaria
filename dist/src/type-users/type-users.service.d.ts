import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeUser } from '@prisma/client';
export declare class TypeUsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTypeUserDto): Promise<any>;
    findAll(): Promise<TypeUser[]>;
    findOne(id: number): Promise<TypeUser>;
    update(id: number, data: TypeUser): Promise<UpdateTypeUserDto>;
    remove(id: number): Promise<TypeUser>;
}
