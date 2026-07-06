import { notas, borrarNota } from "./notas.js";

export function mostrarNotas() {
  let listaNotas = document.getElementById("listaNotas");
  listaNotas.innerHTML = "";

  for (let i = 0; i < notas.length; i++) {
    let li = document.createElement("li");
    li.textContent = notas[i];

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", function() {
      borrarNota(i);
    });

    li.appendChild(botonBorrar);
    listaNotas.appendChild(li);
  }
}