import { Tutor, Tutorado, Tutoria } from "./Entidades";

// Crear un arreglo de objetos basado en la entidad transaccional
const entidades: (Tutor | Tutorado | Tutoria)[] = [
  { id: 1, nombre: "Tutor 1", identificacion: "12345", experticia: "Matemáticas" },
  { id: 2, nombre: "Tutor 2", identificacion: "67890", experticia: "Física" },
  { id: 1, nombre: "Tutorado 1", identificacion: "ABCDE" },
  { id: 2, nombre: "Tutorado 2", identificacion: "FGHIJ" },
  { id: 1, idTutor: 1, idTutorado: 1, asignatura: "Matemáticas", numeroHoras: 2, fecha: "2024-04-30", hora: "10:00" },
  { id: 2, idTutor: 2, idTutorado: 2, asignatura: "Física", numeroHoras: 1, fecha: "2024-05-01", hora: "14:00" }
];

// Crear una función para eliminar un elemento del arreglo por su ID
function eliminarElementoPorID(arr: (Tutor | Tutorado | Tutoria)[], id: number): (Tutor | Tutorado | Tutoria) | null {
  const index = arr.findIndex(item => (item as any).id === id);
  if (index !== -1) {
    const elementoEliminado = arr.splice(index, 1)[0];
    return elementoEliminado;
  }
  return null;
}

// Agregar un Callback para mostrar el elemento eliminado por consola
function eliminarConCallback<T extends Tutor | Tutorado | Tutoria>(arr: T[], id: number, callback: (elemento: T | null) => void): void {
    const elementoEliminado = eliminarElementoPorID(arr, id);
    callback(elementoEliminado as T | null);
}

// Ejemplo de uso
eliminarConCallback(entidades, 2, elementoEliminado => {
    if (elementoEliminado) {
        console.log("Elemento eliminado:", elementoEliminado);
    } else {
        console.log("No se encontró ningún elemento con el ID proporcionado.");
    }
});

export { eliminarConCallback };