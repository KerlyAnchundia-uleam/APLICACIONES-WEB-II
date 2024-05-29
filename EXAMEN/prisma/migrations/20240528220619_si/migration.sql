/*
  Warnings:

  - You are about to drop the column `email` on the `Secuencia` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Secuencia` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Secuencia_email_key";

-- AlterTable
ALTER TABLE "Secuencia" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "nombre" TEXT,
ADD COLUMN     "secuencia" TEXT;
