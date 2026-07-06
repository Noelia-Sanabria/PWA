import { mostrarNotas } from "./ui.js";
import { guardarNota, borrarNota, notas, reemplazarNotas } from "./notas.js";
import { cargarDelStorage } from "./storage.js";

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
