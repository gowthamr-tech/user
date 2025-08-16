import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { UsersService } from 'src/users/users.service';
export declare class OrgService {
    private userService;
    constructor(userService: UsersService);
    create(createOrgDto: CreateOrgDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrgDto: UpdateOrgDto): string;
    remove(id: number): string;
}
