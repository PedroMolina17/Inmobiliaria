import { TypeUsersService } from './type-users.service';
import { TypeUser } from '@prisma/client';
export declare class TypeUsersController {
    private readonly typeUsersService;
    constructor(typeUsersService: TypeUsersService);
    createTypeUser(data: TypeUser): import(".prisma/client").Prisma.Prisma__TypeUserClient<{
        idTypeUser: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getAllTypeUsers(): Promise<{
        idTypeUser: number;
        description: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, data: TypeUser): Promise<{
        idTypeUser: number;
        description: string;
    }>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__TypeUserClient<{
        idTypeUser: number;
        description: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
