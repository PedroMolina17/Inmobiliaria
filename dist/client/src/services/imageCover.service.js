"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeCoverImages = void 0;
const api_1 = require("../api/api");
const getTypeCoverImages = async () => {
    const res = await api_1.api.get('image-cover');
    return res.data;
};
exports.getTypeCoverImages = getTypeCoverImages;
//# sourceMappingURL=imageCover.service.js.map