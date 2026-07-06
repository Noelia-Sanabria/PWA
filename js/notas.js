import { guardarEnStorage, cargarDelStorage } from "./storage.js";
import { mostrarNotas } from "./ui.js";

export let notas = [];

export function reemplazarNotas(nuevasNotas) {
  notas.length = 0;
  notas.push(...nuevasNotas);
}

export function guardarNota(texto) {
  if (texto !== "") {
    notas.push(texto);
    guardarEnStorage();
    mostrarNotas();
  }
}

export function borrarNota(indice) {
  if (confirm("¿Estás seguro de que querés borrar esta nota?")) {
    notas.splice(indice, 1);
    guardarEnStorage();
    mostrarNotas();
  }
}