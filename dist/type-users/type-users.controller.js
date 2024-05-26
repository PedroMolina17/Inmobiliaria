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
exports.TypeUsersController = void 0;
const common_1 = require("@nestjs/common");
const type_users_service_1 = require("./type-users.service");
let TypeUsersController = class TypeUsersController {
    constructor(typeUsersService) {
        this.typeUsersService = typeUsersService;
    }
    createTypeUser(data) {
        return this.typeUsersService.create(data);
    }
    async getAllTypeUsers() {
        return this.typeUsersService.findAll();
    }
    findOne(id) {
        return this.typeUsersService.findOne(+id);
    }
    update(id, data) {
        return this.typeUsersService.update(Number(id), data);
    }
    delete(id) {
        return this.typeUsersService.remove(Number(id));
    }
};
exports.TypeUsersController = TypeUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "createTypeUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeUsersController.prototype, "getAllTypeUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeUsersController.prototype, "delete", null);
exports.TypeUsersController = TypeUsersController = __decorate([
    (0, common_1.Controller)('type-users'),
    __metadata("design:paramtypes", [type_users_service_1.TypeUsersService])
], TypeUsersController);
//# sourceMappingURL=type-users.controller.js.map