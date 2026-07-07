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

export function actualizarEstadoBateria() {
  navigator.getBattery().then((battery) => {
    inicializarMonitorBateria(battery);
    configurarEventListeners(battery);
  });
}

function inicializarMonitorBateria(battery) {
  console.log(`Batería inicial: ${Math.round(battery.level * 100)}%`);
  verificarNivelBajo(battery.level);
}

function configurarEventListeners(battery) {
  battery.addEventListener("levelchange", () => {
    verificarNivelBajo(battery.level);
  });

  battery.addEventListener("chargingchange", () => {
    const estado = battery.charging ? "Cargando" : "Descargando";
    console.log(`Estado de carga: ${estado}`);
  });
}

function verificarNivelBajo(level) {
  const porcentaje = Math.round(level * 100);
  console.log(`Nivel de batería: ${porcentaje}%`);

  if (porcentaje <= 20) {
    mostrarNotificacion(
      "Batería baja",
      `Tu dispositivo tiene ${porcentaje}% de batería`
    );
  }
}

function mostrarNotificacion(titulo, mensaje) {
  // Ajustá esto a tu sistema de notificaciones (toast, alert, etc.)
  console.warn(`⚠️ ${titulo}: ${mensaje}`);
}

// Chequeo inicial
actualizarEstadoBateria();

export function obtenerGeolocalización() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const precisión = position.coords.accuracy;

        console.log(`Ubicación: ${latitud}, ${longitud}`);
        console.log(`Precisión: ${precisión} metros`);
      },
      (error) => {
        console.error(`Error al obtener ubicación: ${error.message}`);
      }
    );
  } else {
    console.log("Geolocalización no soportada en este navegador");
  }
}

// Chequeo inicial
obtenerGeolocalización();

// - Mejoras futuras para geolocalización
// - Implementar watchPosition() para tracking en tiempo real
// - Integrar con Google Maps o Leaflet para visualizar ubicación
// - Guardar ubicación en Local Storage para histórico