import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
export declare class OrgService {
    create(createOrgDto: CreateOrgDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrgDto: UpdateOrgDto): string;
    remove(id: number): string;
}
