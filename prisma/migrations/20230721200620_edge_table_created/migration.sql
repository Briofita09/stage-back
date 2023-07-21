-- CreateTable
CREATE TABLE "edges" (
    "id" SERIAL NOT NULL,
    "processId" INTEGER NOT NULL,
    "source" TEXT,
    "sourceHandle" TEXT,
    "target" TEXT,
    "targetHandle" TEXT,

    CONSTRAINT "edges_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "edges_processId_key" ON "edges"("processId");

-- AddForeignKey
ALTER TABLE "edges" ADD CONSTRAINT "edges_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
