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
const create_type_user_dto_1 = require("./dto/create-type-user.dto");
const update_type_user_dto_1 = require("./dto/update-type-user.dto");
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
    async getTypeUserById(id) {
        const typeUser = await this.typeUsersService.findOne(id);
        if (!typeUser) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        return typeUser;
    }
    async updateTypeUser(id, data) {
        try {
            const typeUser = await this.typeUsersService.update(id, data);
            if (!typeUser) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            return typeUser;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
    }
    async deleteTypeUser(id) {
        try {
            const deletedTypeUser = await this.typeUsersService.remove(id);
            if (!deletedTypeUser) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            return deletedTypeUser;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
    }
};
exports.TypeUsersController = TypeUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_user_dto_1.CreateTypeUserDto]),
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
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeUsersController.prototype, "getTypeUserById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_type_user_dto_1.UpdateTypeUserDto]),
    __metadata("design:returntype", Promise)
], TypeUsersController.prototype, "updateTypeUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeUsersController.prototype, "deleteTypeUser", null);
exports.TypeUsersController = TypeUsersController = __decorate([
    (0, common_1.Controller)('type-users'),
    __metadata("design:paramtypes", [type_users_service_1.TypeUsersService])
], TypeUsersController);
//# sourceMappingURL=type-users.controller.js.map