-- CreateTable
CREATE TABLE "externalLinks" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "processId" TEXT NOT NULL,

    CONSTRAINT "externalLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "externalLinks" ADD CONSTRAINT "externalLinks_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
