import { mostrarNotas } from "./ui.js";
import { guardarNota, borrarNota, notas, reemplazarNotas, obtenerNotasNumeradas, aplicarMayusculas, aplicarMinusculas, buscarNotas } from "./notas.js";
import { cargarDelStorage } from "./storage.js";
import { actualizarEstadoConexion, actualizarEstadoBateria, obtenerGeolocalización } from "./bom.js";
import { traerNotasDelServer } from "./api.js";

traerNotasDelServer();
cargarDelStorage();
mostrarNotas();

let inputNota = document.getElementById("inputNota");
let botonEnviar = document.getElementById("submitButton");

botonEnviar.addEventListener("click", function () {
  guardarNota(inputNota.value);
  inputNota.value = "";
});

inputNota.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    guardarNota(inputNota.value);
    inputNota.value = "";
  }
});

let mayusculasButton = document.getElementById("mayusculasButton");
let minusculasButton = document.getElementById("minusculasButton");

mayusculasButton.addEventListener("click", aplicarMayusculas);
minusculasButton.addEventListener("click", aplicarMinusculas);

let inputBuscador = document.getElementById("inputBuscador");
let buscarButton = document.getElementById("buscarButton");

buscarButton.addEventListener("click", function () {
  buscarNotas(inputBuscador.value);
});

inputBuscador.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    buscarNotas(inputBuscador.value);
  }
});