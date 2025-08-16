"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleInput = void 0;
const create_role_input_1 = require("./create-role.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateRoleInput extends (0, mapped_types_1.PartialType)(create_role_input_1.CreateRoleInput) {
    id;
}
exports.UpdateRoleInput = UpdateRoleInput;
//# sourceMappingURL=update-role.input.js.map