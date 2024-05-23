import { TypepropertyService } from './typeproperty.service';
import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';
export declare class TypepropertyController {
    private readonly typepropertyService;
    constructor(typepropertyService: TypepropertyService);
    create(createTypepropertyDto: CreateTypepropertyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTypepropertyDto: UpdateTypepropertyDto): string;
    remove(id: string): string;
}
