const API_URL = "https://6a4e4bb5e785c9ef536c9a61.mockapi.io/notas";

export async function traerNotasDelServer() {
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    console.log("Notas del server:", datos);
    return datos;
  } catch (error) {
    console.error("Error al traer notas:", error);
  }
}