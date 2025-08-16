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
exports.OrgController = void 0;
const common_1 = require("@nestjs/common");
const org_service_1 = require("./org.service");
const create_org_dto_1 = require("./dto/create-org.dto");
const update_org_dto_1 = require("./dto/update-org.dto");
const mongodb_1 = require("mongodb");
let OrgController = class OrgController {
    orgService;
    db;
    constructor(orgService, db) {
        this.orgService = orgService;
        this.db = db;
    }
    create(createOrgDto) {
        console.log('cretajhjds', createOrgDto);
        return this.db.collection('org').insertOne(createOrgDto);
    }
    findAll() {
        return this.db.collection('org').find().toArray();
    }
    async findOne(id) {
    }
    update(id, updateOrgDto) {
        return this.orgService.update(+id, updateOrgDto);
    }
    remove(id) {
        return this.orgService.remove(+id);
    }
};
exports.OrgController = OrgController;
__decorate([
    (0, common_1.Post)('createOrg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_org_dto_1.CreateOrgDto]),
    __metadata("design:returntype", void 0)
], OrgController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrgController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrgController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_org_dto_1.UpdateOrgDto]),
    __metadata("design:returntype", void 0)
], OrgController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrgController.prototype, "remove", null);
exports.OrgController = OrgController = __decorate([
    (0, common_1.Controller)('org'),
    __param(1, (0, common_1.Inject)('MONGO_CLIENT')),
    __metadata("design:paramtypes", [org_service_1.OrgService,
        mongodb_1.Db])
], OrgController);
//# sourceMappingURL=org.controller.js.map