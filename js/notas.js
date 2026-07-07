import { guardarEnStorage, cargarDelStorage } from "./storage.js";
import { mostrarNotas } from "./ui.js";

export let notas = [];
export let formatoNotas = "normal";
export let notasFiltradas = null;

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

export function obtenerNotasNumeradas() {
  return notas.map((nota, indice) => `${indice + 1}. ${nota}`);
}

export function aplicarMayusculas() {
  formatoNotas = "mayusculas";
  guardarEnStorage();
  mostrarNotas();
}

export function aplicarMinusculas() {
  formatoNotas = "minusculas";
  guardarEnStorage();
  mostrarNotas();
}

export function buscarNotas(palabraClave) {
  if (palabraClave === "") {
    notasFiltradas = null; // Resetea el filtro
    mostrarNotas();
    return;
  }

  notasFiltradas = notas.filter(nota => 
    nota.toLowerCase().includes(palabraClave.toLowerCase())
  );

  if (notasFiltradas.length === 0) {
    let listaNotas = document.getElementById("listaNotas");
    listaNotas.innerHTML = "<li>No se encontraron notas</li>";
    return;
  }

  mostrarNotas();
}

export function contarNotas() {
  return notas.reduce((count) => count + 1, 0);
}