/*
  Warnings:

  - The `xCoord` column on the `processes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `yCoord` column on the `processes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "processes" DROP COLUMN "xCoord",
ADD COLUMN     "xCoord" INTEGER,
DROP COLUMN "yCoord",
ADD COLUMN     "yCoord" INTEGER;
