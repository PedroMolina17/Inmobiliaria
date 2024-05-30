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
exports.TypepropertyController = void 0;
const common_1 = require("@nestjs/common");
const typeproperty_service_1 = require("./typeproperty.service");
const create_typeproperty_dto_1 = require("./dto/create-typeproperty.dto");
const update_typeproperty_dto_1 = require("./dto/update-typeproperty.dto");
let TypepropertyController = class TypepropertyController {
    constructor(typepropertyService) {
        this.typepropertyService = typepropertyService;
    }
    create(createTypepropertyDto) {
        return this.typepropertyService.create(createTypepropertyDto);
    }
    findAll() {
        return this.typepropertyService.findAll();
    }
    findOne(id) {
        return this.typepropertyService.findOne(+id);
    }
    update(id, updateTypepropertyDto) {
        return this.typepropertyService.update(+id, updateTypepropertyDto);
    }
    remove(id) {
        return this.typepropertyService.remove(+id);
    }
};
exports.TypepropertyController = TypepropertyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_typeproperty_dto_1.CreateTypepropertyDto]),
    __metadata("design:returntype", void 0)
], TypepropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypepropertyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypepropertyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_typeproperty_dto_1.UpdateTypepropertyDto]),
    __metadata("design:returntype", void 0)
], TypepropertyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypepropertyController.prototype, "remove", null);
exports.TypepropertyController = TypepropertyController = __decorate([
    (0, common_1.Controller)('typeproperty'),
    __metadata("design:paramtypes", [typeproperty_service_1.TypepropertyService])
], TypepropertyController);
//# sourceMappingURL=typeproperty.controller.js.map