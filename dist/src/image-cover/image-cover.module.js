"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCoverModule = void 0;
const common_1 = require("@nestjs/common");
const image_cover_service_1 = require("./image-cover.service");
const image_cover_controller_1 = require("./image-cover.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let ImageCoverModule = class ImageCoverModule {
};
exports.ImageCoverModule = ImageCoverModule;
exports.ImageCoverModule = ImageCoverModule = __decorate([
    (0, common_1.Module)({
        controllers: [image_cover_controller_1.ImageCoverController],
        providers: [image_cover_service_1.ImageCoverService],
        imports: [
            prisma_module_1.PrismaModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'dist'),
                serveRoot: '/dist',
            }),
        ],
    })
], ImageCoverModule);
//# sourceMappingURL=image-cover.module.js.map