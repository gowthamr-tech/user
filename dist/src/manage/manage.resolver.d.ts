import { ManageService } from './manage.service';
import { CreateManageInput } from './dto/create-manage.input';
import { UpdateManageInput } from './dto/update-manage.input';
export declare class ManageResolver {
    private readonly manageService;
    constructor(manageService: ManageService);
    create(createManageInput: CreateManageInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateManageInput: UpdateManageInput): string;
    remove(id: number): string;
}
