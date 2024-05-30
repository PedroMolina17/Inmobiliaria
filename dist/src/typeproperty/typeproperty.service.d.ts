import { CreateTypepropertyDto } from './dto/create-typeproperty.dto';
import { UpdateTypepropertyDto } from './dto/update-typeproperty.dto';
export declare class TypepropertyService {
    create(createTypepropertyDto: CreateTypepropertyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTypepropertyDto: UpdateTypepropertyDto): string;
    remove(id: number): string;
}
