import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
export declare class TypeUsersController {
    private readonly typeUsersService;
    constructor(typeUsersService: TypeUsersService);
    createTypeUser(data: CreateTypeUserDto): Promise<{
        idTypeUser: number;
        description: string;
    }>;
    getAllTypeUsers(): Promise<{
        idTypeUser: number;
        description: string;
    }[]>;
    getTypeUserById(id: number): Promise<{
        idTypeUser: number;
        description: string;
    }>;
    updateTypeUser(id: number, data: UpdateTypeUserDto): Promise<UpdateTypeUserDto>;
    deleteTypeUser(id: number): Promise<{
        idTypeUser: number;
        description: string;
    }>;
}
