/*
  Warnings:

  - The primary key for the `edges` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `processes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "edges" DROP CONSTRAINT "edges_processId_fkey";

-- DropForeignKey
ALTER TABLE "processes" DROP CONSTRAINT "processes_mainProcessId_fkey";

-- AlterTable
ALTER TABLE "edges" DROP CONSTRAINT "edges_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "processId" SET DATA TYPE TEXT,
ADD CONSTRAINT "edges_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "edges_id_seq";

-- AlterTable
ALTER TABLE "processes" DROP CONSTRAINT "processes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "mainProcessId" SET DATA TYPE TEXT,
ADD CONSTRAINT "processes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "processes_id_seq";

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_mainProcessId_fkey" FOREIGN KEY ("mainProcessId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edges" ADD CONSTRAINT "edges_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
