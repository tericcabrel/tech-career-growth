-- CreateTable
CREATE TABLE `resources` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `type` ENUM('WEBPAGE', 'VIDEO', 'PICTURE', 'TEXT', 'OTHER') NOT NULL DEFAULT 'WEBPAGE',
    `link` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `extra` JSON NOT NULL,
    `click_count` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `resources_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
