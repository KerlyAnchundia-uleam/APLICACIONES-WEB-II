const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function ingresarDatosIniciales() {
  try {
    // Insertar datos en la tabla Tutor
    const tutor = await prisma.tutor.create({
      data: {
        nombre: "Nombre del Tutor",
        // Añade otros campos según el modelo de la tabla Tutor
      },
    });

    // Insertar datos en la tabla Tutorado
    const tutorado = await prisma.tutorado.create({
      data: {
        nombre: "Nombre del Tutorado",
        // Añade otros campos según el modelo de la tabla Tutorado
      },
    });

    // Insertar datos en la tabla Curso
    const curso = await prisma.curso.create({
      data: {
        nombre: "Nombre del Curso",
        // Añade otros campos según el modelo de la tabla Curso
      },
    });

    // Insertar datos en la tabla Tutoría
    const tutoria = await prisma.tutoria.create({
      data: {
        tutor: { connect: { id: tutor.id } },
        tutorado: { connect: { id: tutorado.id } },
        curso: { connect: { id: curso.id } },
        fecha: new Date(), // Ejemplo de fecha actual, cámbialo según sea necesario
        // Añade otros campos según el modelo de la tabla Tutoría
      },
    });

    console.log("Datos ingresados correctamente en todas las tablas:", {
      tutor,
      tutorado,
      curso,
      tutoria,
    });
  } catch (error) {
    console.error("Error al ingresar datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llama a la función para ingresar los datos iniciales
ingresarDatosIniciales();
