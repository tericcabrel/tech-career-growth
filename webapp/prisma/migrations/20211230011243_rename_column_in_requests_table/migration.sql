/*
  Warnings:

  - You are about to drop the column `type` on the `requests` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `requests` DROP COLUMN `type`,
    ADD COLUMN `status` ENUM('PENDING', 'IN_PROGRESS', 'DONE', 'ARCHIVED') NOT NULL DEFAULT 'PENDING';
