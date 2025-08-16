"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgModule = void 0;
const common_1 = require("@nestjs/common");
const org_service_1 = require("./org.service");
const org_controller_1 = require("./org.controller");
const mongo_provider_1 = require("../../database/mongo.provider");
const users_module_1 = require("../users/users.module");
let OrgModule = class OrgModule {
};
exports.OrgModule = OrgModule;
exports.OrgModule = OrgModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        controllers: [org_controller_1.OrgController],
        providers: [org_service_1.OrgService, mongo_provider_1.MongoProvider],
        exports: [org_service_1.OrgService]
    })
], OrgModule);
//# sourceMappingURL=org.module.js.map