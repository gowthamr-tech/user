import { OrgService } from './org.service';
import { CreateOrgDto } from './dto/create-org.dto';
import { UpdateOrgDto } from './dto/update-org.dto';
import { Db } from 'mongodb';
export declare class OrgController {
    private readonly orgService;
    private db;
    constructor(orgService: OrgService, db: Db);
    create(createOrgDto: CreateOrgDto): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    findAll(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    findOne(id: string): Promise<void>;
    update(id: string, updateOrgDto: UpdateOrgDto): string;
    remove(id: string): string;
}
