/*
  Warnings:

  - You are about to drop the column `imageCoverIdImageCover` on the `imagedescription` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `imagedescription` DROP FOREIGN KEY `ImageDescription_imageCoverIdImageCover_fkey`;

-- AlterTable
ALTER TABLE `imagedescription` DROP COLUMN `imageCoverIdImageCover`,
    ADD COLUMN `IdImageCover` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ImageDescription` ADD CONSTRAINT `ImageDescription_IdImageCover_fkey` FOREIGN KEY (`IdImageCover`) REFERENCES `ImageCover`(`idImageCover`) ON DELETE SET NULL ON UPDATE CASCADE;
