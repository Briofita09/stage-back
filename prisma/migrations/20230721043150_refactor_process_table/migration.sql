/*
  Warnings:

  - You are about to drop the `Process` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubProcess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_areaId_fkey";

-- DropForeignKey
ALTER TABLE "SubProcess" DROP CONSTRAINT "SubProcess_processId_fkey";

-- DropTable
DROP TABLE "Process";

-- DropTable
DROP TABLE "SubProcess";

-- CreateTable
CREATE TABLE "processes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "areaId" INTEGER,
    "order" INTEGER,
    "mainProcessId" INTEGER,

    CONSTRAINT "processes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "processes_name_key" ON "processes"("name");

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_mainProcessId_fkey" FOREIGN KEY ("mainProcessId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
