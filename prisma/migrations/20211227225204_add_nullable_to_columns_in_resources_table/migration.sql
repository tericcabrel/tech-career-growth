-- AlterTable
ALTER TABLE `resources` MODIFY `description` TEXT NULL,
    MODIFY `picture` VARCHAR(255) NULL,
    MODIFY `extra` JSON NULL,
    MODIFY `click_count` INTEGER NOT NULL DEFAULT 0;
