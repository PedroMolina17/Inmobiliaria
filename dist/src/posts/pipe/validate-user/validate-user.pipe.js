"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUserPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateUserPipe = class ValidateUserPipe {
    transform(value, metadata) {
        const ageNumber = parseInt(value.age.tostring(), 10);
        if (isNaN(ageNumber)) {
            throw new common_1.HttpException('Invalid age number ', common_1.HttpStatus.BAD_REQUEST);
        }
        return { value, age: ageNumber };
    }
};
exports.ValidateUserPipe = ValidateUserPipe;
exports.ValidateUserPipe = ValidateUserPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateUserPipe);
//# sourceMappingURL=validate-user.pipe.js.map