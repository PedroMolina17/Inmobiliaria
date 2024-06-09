import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
export declare class TypeUsersController {
    private readonly typeUsersService;
    constructor(typeUsersService: TypeUsersService);
    createTypeUser(data: CreateTypeUserDto): Promise<any>;
    getAllTypeUsers(): Promise<TypeUser[]>;
    getTypeUserById(id: number): Promise<TypeUser>;
    updateTypeUser(id: number, data: UpdateTypeUserDto): Promise<UpdateTypeUserDto>;
    deleteTypeUser(id: number): Promise<TypeUser>;
}
