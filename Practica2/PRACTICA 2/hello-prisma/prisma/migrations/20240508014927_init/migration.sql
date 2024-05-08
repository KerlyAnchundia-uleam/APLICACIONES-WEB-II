-- CreateTable
CREATE TABLE "Tutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "experticia" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tutorado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tutoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "asignatura" TEXT NOT NULL,
    "numeroHoras" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "hora" TEXT NOT NULL,
    "idTutor" INTEGER NOT NULL,
    "idTutorado" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Tutoria_idTutor_fkey" FOREIGN KEY ("idTutor") REFERENCES "Tutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tutoria_idTutorado_fkey" FOREIGN KEY ("idTutorado") REFERENCES "Tutorado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_identificacion_key" ON "Tutor"("identificacion");

-- CreateIndex
CREATE UNIQUE INDEX "Tutorado_identificacion_key" ON "Tutorado"("identificacion");
