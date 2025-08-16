"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManageInput = void 0;
const create_manage_input_1 = require("./create-manage.input");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateManageInput extends (0, mapped_types_1.PartialType)(create_manage_input_1.CreateManageInput) {
    id;
}
exports.UpdateManageInput = UpdateManageInput;
//# sourceMappingURL=update-manage.input.js.map