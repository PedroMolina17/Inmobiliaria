import { TypeUsersService } from './type-users.service';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
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
    update(id: string, updateTypeUserDto: UpdateTypeUserDto): string;
    remove(id: string): string;
}
