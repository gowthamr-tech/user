
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateManageInput {
    exampleField?: Nullable<number>;
}

export interface UpdateManageInput {
    id: number;
}

export interface CreateRoleInput {
    exampleField?: Nullable<number>;
}

export interface UpdateRoleInput {
    id: number;
}

export interface SignUp {
    id?: Nullable<string>;
    first_name?: Nullable<string>;
}

export interface Manage {
    exampleField?: Nullable<number>;
}

export interface IQuery {
    manages(): Nullable<Manage>[] | Promise<Nullable<Manage>[]>;
    manage(id: number): Nullable<Manage> | Promise<Nullable<Manage>>;
    roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>;
    role(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface IMutation {
    createManage(createManageInput: CreateManageInput): Manage | Promise<Manage>;
    updateManage(updateManageInput: UpdateManageInput): Manage | Promise<Manage>;
    removeManage(id: number): Nullable<Manage> | Promise<Nullable<Manage>>;
    createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;
    updateRole(updateRoleInput: UpdateRoleInput): Role | Promise<Role>;
    removeRole(id: number): Nullable<Role> | Promise<Nullable<Role>>;
    signUp(sign?: Nullable<SignUp>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Role {
    exampleField?: Nullable<number>;
}

export interface User {
    id?: Nullable<string>;
    first_name?: Nullable<string>;
}

type Nullable<T> = T | null;
