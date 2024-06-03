"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeDescriptionImages = void 0;
const api_1 = require("../api/api");
const getTypeDescriptionImages = async (id) => {
    const res = await api_1.api.get(`image-description?idImageCover=${id}`);
    return res.data;
};
exports.getTypeDescriptionImages = getTypeDescriptionImages;
//# sourceMappingURL=imageDescription.hook.js.map