/*
  Warnings:

  - The values [TEXT] on the enum `resources_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `resources` MODIFY `type` ENUM('WEBPAGE', 'VIDEO', 'PICTURE', 'SLIDE', 'ARTICLE', 'OTHER') NOT NULL DEFAULT 'WEBPAGE';
