-- AlterTable
ALTER TABLE `venue` ADD COLUMN `normal_seat` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `vip_seat` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `vvip_seat` INTEGER NOT NULL DEFAULT 0;
