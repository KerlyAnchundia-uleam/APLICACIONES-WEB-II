// Definir las interfaces para cada entidad
interface Tutor {
    id: number;
    nombre: string;
    identificacion: string;
    experticia: string;
  }
  
  interface Tutorado {
    id: number;
    nombre: string;
    identificacion: string;
  }
  
  interface Tutoria {
    id: number;
    idTutor: number;
    idTutorado: number;
    asignatura: string;
    numeroHoras: number;
    fecha: string;
    hora: string;
  }
  
  export { Tutor, Tutorado, Tutoria };