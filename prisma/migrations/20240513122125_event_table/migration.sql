/*
  Warnings:

  - You are about to alter the column `qr_code` on the `event` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `event` MODIFY `qr_code` DECIMAL(65, 30) NOT NULL;
