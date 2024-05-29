"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageDescriptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_image_description_dto_1 = require("./create-image-description.dto");
class UpdateImageDescriptionDto extends (0, mapped_types_1.PartialType)(create_image_description_dto_1.CreateImageDescriptionDto) {
}
exports.UpdateImageDescriptionDto = UpdateImageDescriptionDto;
//# sourceMappingURL=update-image-description.dto.js.map