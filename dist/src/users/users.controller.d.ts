import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Db } from 'mongodb';
export declare class UsersController {
    private readonly usersService;
    private readonly db;
    constructor(usersService: UsersService, db: Db);
    create(user: CreateUserDto): Promise<import("mongodb").InsertOneResult<import("bson").Document>>;
    findAll(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    findOne(id: string): Promise<import("bson").Document[]>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
