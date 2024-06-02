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
exports.ImageCoverController = void 0;
const common_1 = require("@nestjs/common");
const image_cover_service_1 = require("./image-cover.service");
const create_image_cover_dto_1 = require("./dto/create-image-cover.dto");
const multer_1 = require("@nestjs/platform-express/multer");
const multer_2 = require("multer");
const images_helper_1 = require("./helper/images.helper");
let ImageCoverController = class ImageCoverController {
    constructor(imageCoverService) {
        this.imageCoverService = imageCoverService;
    }
    async postImageCover(file, body) {
        const filePath = `/upload-image-cover/${file.filename}`;
        const description = body.description;
        const createImageCoverDto = {
            imageUrl: filePath,
            description: description,
        };
        const savedImage = await this.imageCoverService.create(createImageCoverDto);
        return savedImage;
    }
    findAllImageCover() {
        return this.imageCoverService.findAll();
    }
    async findOne(id) {
        const typeUser = await this.imageCoverService.findOne(Number(id));
        if (!typeUser) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        return typeUser;
    }
    async putImageCover(file, body, id) {
        const filePath = `/images/upload-image-cover/${file.filename}`;
        const description = body.description;
        const createImageCoverDto = {
            imageUrl: filePath,
            description: description,
        };
        const savedImage = await this.imageCoverService.update(Number(id), createImageCoverDto);
        return savedImage;
    }
    async remove(id) {
        try {
            const deleteImageCover = await this.imageCoverService.remove(+id);
            if (!deleteImageCover) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            return deleteImageCover;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
    }
};
exports.ImageCoverController = ImageCoverController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('imageCover', {
        storage: (0, multer_2.diskStorage)({
            destination: './dist/images/upload-image-cover',
            filename: images_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_image_cover_dto_1.CreateImageCoverDto]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "postImageCover", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "findAllImageCover", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('imageCover', {
        storage: (0, multer_2.diskStorage)({
            destination: './images/upload-image-cover',
            filename: images_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_image_cover_dto_1.CreateImageCoverDto, String]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "putImageCover", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "remove", null);
exports.ImageCoverController = ImageCoverController = __decorate([
    (0, common_1.Controller)('image-cover'),
    __metadata("design:paramtypes", [image_cover_service_1.ImageCoverService])
], ImageCoverController);
//# sourceMappingURL=image-cover.controller.js.map