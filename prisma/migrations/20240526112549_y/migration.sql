-- CreateTable
CREATE TABLE `ImageCover` (
    `idImageCover` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `idImageDescription` INTEGER NOT NULL,

    PRIMARY KEY (`idImageCover`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageDescription` (
    `imageDescriptionId` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`imageDescriptionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImageCover` ADD CONSTRAINT `ImageCover_idImageDescription_fkey` FOREIGN KEY (`idImageDescription`) REFERENCES `ImageDescription`(`imageDescriptionId`) ON DELETE RESTRICT ON UPDATE CASCADE;
