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
exports.ManageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const manage_service_1 = require("./manage.service");
const create_manage_input_1 = require("./dto/create-manage.input");
const update_manage_input_1 = require("./dto/update-manage.input");
let ManageResolver = class ManageResolver {
    manageService;
    constructor(manageService) {
        this.manageService = manageService;
    }
    create(createManageInput) {
        return this.manageService.create(createManageInput);
    }
    findAll() {
        return this.manageService.findAll();
    }
    findOne(id) {
        return this.manageService.findOne(id);
    }
    update(updateManageInput) {
        return this.manageService.update(updateManageInput.id, updateManageInput);
    }
    remove(id) {
        return this.manageService.remove(id);
    }
};
exports.ManageResolver = ManageResolver;
__decorate([
    (0, graphql_1.Mutation)('createManage'),
    __param(0, (0, graphql_1.Args)('createManageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manage_input_1.CreateManageInput]),
    __metadata("design:returntype", void 0)
], ManageResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)('manage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManageResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('manage'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ManageResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateManage'),
    __param(0, (0, graphql_1.Args)('updateManageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_manage_input_1.UpdateManageInput]),
    __metadata("design:returntype", void 0)
], ManageResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removeManage'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ManageResolver.prototype, "remove", null);
exports.ManageResolver = ManageResolver = __decorate([
    (0, graphql_1.Resolver)('Manage'),
    __metadata("design:paramtypes", [manage_service_1.ManageService])
], ManageResolver);
//# sourceMappingURL=manage.resolver.js.map