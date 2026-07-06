import { notas, reemplazarNotas } from "./notas.js";

export function guardarEnStorage() {
  localStorage.setItem("misNotas", JSON.stringify(notas));
}

export function cargarDelStorage() {
  let notasGuardadas = localStorage.getItem("misNotas");
  if (notasGuardadas) {
    reemplazarNotas(JSON.parse(notasGuardadas));
  }
}