-- AlterTable
ALTER TABLE `resources` MODIFY `type` ENUM('WEBPAGE', 'VIDEO', 'PICTURE', 'SLIDE', 'TEXT', 'ARTICLE', 'OTHER') NOT NULL DEFAULT 'WEBPAGE';
