import { CreateManageInput } from './dto/create-manage.input';
import { UpdateManageInput } from './dto/update-manage.input';
export declare class ManageService {
    create(createManageInput: CreateManageInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateManageInput: UpdateManageInput): string;
    remove(id: number): string;
}
