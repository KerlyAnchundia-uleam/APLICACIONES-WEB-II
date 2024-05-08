const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function eliminarTutoria(id) {
  try {
    const tutoria = await prisma.tutoria.findUnique({
      where: { id },
    });

    if (!tutoria) {
      throw new Error('Tutoría no encontrada');
    }

    await prisma.tutoria.delete({
      where: { id },
    });

    console.log('Tutoría eliminada correctamente');
  } catch (error) {
    console.error('Error al eliminar Tutoría:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llama a la función con el ID de la tutoría que quieres eliminar
eliminarTutoria(1);
