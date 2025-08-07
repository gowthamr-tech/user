"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrgDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_org_dto_1 = require("./create-org.dto");
class UpdateOrgDto extends (0, mapped_types_1.PartialType)(create_org_dto_1.CreateOrgDto) {
}
exports.UpdateOrgDto = UpdateOrgDto;
//# sourceMappingURL=update-org.dto.js.map