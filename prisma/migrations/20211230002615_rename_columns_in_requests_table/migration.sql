/*
  Warnings:

  - You are about to drop the column `email` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `requests` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `requests_email_key` ON `requests`;

-- DropIndex
DROP INDEX `requests_name_key` ON `requests`;

-- AlterTable
ALTER TABLE `requests` DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `user_email` VARCHAR(50) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(50) NOT NULL;
