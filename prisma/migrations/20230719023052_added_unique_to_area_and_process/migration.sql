/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Process` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `areas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Process_name_key" ON "Process"("name");

-- CreateIndex
CREATE UNIQUE INDEX "areas_name_key" ON "areas"("name");
