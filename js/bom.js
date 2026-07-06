export function actualizarEstadoConexion() {
  if (navigator.onLine) {
    console.log("Conectado a internet");
  } else {
    console.log("Sin conexión a internet");
  }
}

window.addEventListener("online", actualizarEstadoConexion);
window.addEventListener("offline", actualizarEstadoConexion);

// Chequeo inicial al cargar la app
actualizarEstadoConexion();