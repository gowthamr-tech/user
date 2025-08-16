"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roles_service_1 = require("./roles.service");
const create_role_input_1 = require("./dto/create-role.input");
const update_role_input_1 = require("./dto/update-role.input");
let RolesResolver = class RolesResolver {
    rolesService;
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    create(createRoleInput) {
        return this.rolesService.create(createRoleInput);
    }
    findAll() {
        return this.rolesService.findAll();
    }
    findOne(id) {
        return this.rolesService.findOne(id);
    }
    update(updateRoleInput) {
        return this.rolesService.update(updateRoleInput.id, updateRoleInput);
    }
    remove(id) {
        return this.rolesService.remove(id);
    }
};
exports.RolesResolver = RolesResolver;
__decorate([
    (0, graphql_1.Mutation)('createRole'),
    __param(0, (0, graphql_1.Args)('createRoleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_input_1.CreateRoleInput]),
    __metadata("design:returntype", void 0)
], RolesResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('role'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateRole'),
    __param(0, (0, graphql_1.Args)('updateRoleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_role_input_1.UpdateRoleInput]),
    __metadata("design:returntype", void 0)
], RolesResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeRole'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolesResolver.prototype, "remove", null);
exports.RolesResolver = RolesResolver = __decorate([
    (0, graphql_1.Resolver)('Role'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesResolver);
//# sourceMappingURL=roles.resolver.js.map