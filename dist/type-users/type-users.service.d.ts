import { PrismaService } from 'src/prisma/prisma.service';
import { TypeUser } from '@prisma/client';
export declare class TypeUsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: TypeUser): import(".prisma/client").Prisma.Prisma__TypeUserClient<{
        idTypeUser: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<TypeUser[]>;
    findOne(id: number): string;
    update(id: number, data: TypeUser): Promise<TypeUser>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TypeUserClient<{
        idTypeUser: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
