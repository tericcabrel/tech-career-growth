/*
  Warnings:

  - The values [IN_PROGRESS] on the enum `requests_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `requests` MODIFY `status` ENUM('PENDING', 'DONE', 'ARCHIVED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `resources` MODIFY `type` ENUM('WEBPAGE', 'VIDEO', 'PICTURE', 'SLIDE', 'TEXT', 'OTHER') NOT NULL DEFAULT 'WEBPAGE';
