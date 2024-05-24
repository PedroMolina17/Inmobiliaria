"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTypeUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_type_user_dto_1 = require("./create-type-user.dto");
class UpdateTypeUserDto extends (0, mapped_types_1.PartialType)(create_type_user_dto_1.CreateTypeUserDto) {
}
exports.UpdateTypeUserDto = UpdateTypeUserDto;
//# sourceMappingURL=update-type-user.dto.js.map