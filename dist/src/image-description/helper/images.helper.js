"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameImage = void 0;
const renameImage = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileName = file.originalname;
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.random() * 16)
        .join('');
    callback(null, `${name}-${randomName}${fileName}`);
};
exports.renameImage = renameImage;
//# sourceMappingURL=images.helper.js.map