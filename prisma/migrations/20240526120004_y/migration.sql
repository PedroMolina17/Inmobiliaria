/*
  Warnings:

  - You are about to drop the column `idImageDescription` on the `imagecover` table. All the data in the column will be lost.
  - The primary key for the `imagedescription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageDescriptionId` on the `imagedescription` table. All the data in the column will be lost.
  - Added the required column `idImageDescription` to the `ImageDescription` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `imagecover` DROP FOREIGN KEY `ImageCover_idImageDescription_fkey`;

-- AlterTable
ALTER TABLE `imagecover` DROP COLUMN `idImageDescription`;

-- AlterTable
ALTER TABLE `imagedescription` DROP PRIMARY KEY,
    DROP COLUMN `imageDescriptionId`,
    ADD COLUMN `idImageDescription` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `imageCoverIdImageCover` INTEGER NULL,
    ADD PRIMARY KEY (`idImageDescription`);

-- AddForeignKey
ALTER TABLE `ImageDescription` ADD CONSTRAINT `ImageDescription_imageCoverIdImageCover_fkey` FOREIGN KEY (`imageCoverIdImageCover`) REFERENCES `ImageCover`(`idImageCover`) ON DELETE SET NULL ON UPDATE CASCADE;
