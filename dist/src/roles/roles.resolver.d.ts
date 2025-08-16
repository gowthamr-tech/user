import { RolesService } from './roles.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
export declare class RolesResolver {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleInput: CreateRoleInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateRoleInput: UpdateRoleInput): string;
    remove(id: number): string;
}
