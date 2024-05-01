import { Tutor, Tutorado, Tutoria } from "./Entidades";

// Definir interfaz para la respuesta del servicio REST
interface RestResponse {
  data: (Tutor | Tutorado | Tutoria)[];
}

// Función para consultar el servicio REST
async function fetchData(url: string): Promise<RestResponse | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Aquí puedes validar que la respuesta cumpla con la estructura esperada antes de retornarla
    return data as RestResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// URL de ejemplo de un servicio REST gratuito
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Ejemplo de uso de la función fetchData
fetchData(apiUrl).then(response => {
  if (response) {
    console.log("Data from REST service:", response);
  } else {
    console.log("Failed to fetch data from REST service.");
  }
});

export { fetchData };