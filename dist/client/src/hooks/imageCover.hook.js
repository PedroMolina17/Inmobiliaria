"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeCoverImages = void 0;
const imageCover_service_1 = require("../services/imageCover.service");
const getTypeCoverImages = async () => {
    const res = await imageCover_service_1.api.get('image-cover');
    return res.data;
};
exports.getTypeCoverImages = getTypeCoverImages;
//# sourceMappingURL=imageCover.hook.js.map