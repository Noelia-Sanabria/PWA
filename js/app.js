import { mostrarNotas } from "./ui.js";
import { guardarNota, borrarNota, notas, reemplazarNotas, obtenerNotasNumeradas, aplicarMayusculas, aplicarMinusculas } from "./notas.js";
import { cargarDelStorage } from "./storage.js";
import { actualizarEstadoConexion, actualizarEstadoBateria, obtenerGeolocalización } from "./bom.js";

cargarDelStorage();
mostrarNotas();

let inputNota = document.getElementById("inputNota");
let botonEnviar = document.getElementById("submitButton");

botonEnviar.addEventListener("click", function() {
  guardarNota(inputNota.value);
  inputNota.value = "";
});

inputNota.addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    guardarNota(inputNota.value);
    inputNota.value = "";
  }
});

let mayusculasButton = document.getElementById("mayusculasButton");
let minusculasButton = document.getElementById("minusculasButton");

mayusculasButton.addEventListener("click", aplicarMayusculas);
minusculasButton.addEventListener("click", aplicarMinusculas);
