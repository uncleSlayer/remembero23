-- CreateEnum
CREATE TYPE "Category" AS ENUM ('STUDY', 'WORK', 'FUN');

-- CreateTable
CREATE TABLE "Journal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "imageOne" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
