import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
export declare class RolesService {
    create(createRoleInput: CreateRoleInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoleInput: UpdateRoleInput): string;
    remove(id: number): string;
}
