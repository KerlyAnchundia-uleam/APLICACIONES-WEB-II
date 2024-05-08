const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function ingresarDfatosIniciales() {
  try {
    // Insertar datos en la tabla Tutor
    const tutor = await prisma.tutor.create({
      data: {
        nombre: "Nombre del tutor",
        // Añade otros campos según el modelo de la tabla Tutor
      },
    });

    // Insertar datos en la tabla Tutorado
    const tutorado = await prisma.tutorado.create({
      data: {
        nombre: "Nombre del tutorado",
        // Añade otros campos según el modelo de la tabla Tutorado
      },
    });

    // Insertar datos en la tabla Curso
    const curso = await prisma.curso.create({
      data: {
        nombre: "Nombre del curso",
        // Añade otros campos según el modelo de la tabla Curso
      },
    });

    // Relacionar Tutor con Tutorado (varias tutorías)
    const tutoriaTutorTutorado = await prisma.tutorTutorado.create({
      data: {
        tutor: { connect: { id: tutor.id } },
        tutorado: { connect: { id: tutorado.id } },
        // Añade otros campos según el modelo de la tabla TutorTutorado
      },
    });

    // Relacionar Curso con Tutorado (varios estudiantes inscritos)
    const cursoTutorado = await prisma.cursoTutorado.create({
      data: {
        curso: { connect: { id: curso.id } },
        tutorado: { connect: { id: tutorado.id } },
        // Añade otros campos según el modelo de la tabla CursoTutorado
      },
    });

    console.log("Datos ingresados correctamente en todas las tablas:", {
      tutor,
      tutorado,
      curso,
      tutoriaTutorTutorado,
      cursoTutorado,
    });
  } catch (error) {
    console.error("Error al ingresar datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llama a la función para ingresar los datos iniciales
ingresarDatosIniciales();
