/*
  Warnings:

  - You are about to drop the column `IdImageCover` on the `imagedescription` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `imagedescription` DROP FOREIGN KEY `ImageDescription_IdImageCover_fkey`;

-- AlterTable
ALTER TABLE `imagedescription` DROP COLUMN `IdImageCover`,
    ADD COLUMN `idImageCover` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ImageDescription` ADD CONSTRAINT `ImageDescription_idImageCover_fkey` FOREIGN KEY (`idImageCover`) REFERENCES `ImageCover`(`idImageCover`) ON DELETE SET NULL ON UPDATE CASCADE;
