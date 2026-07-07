import { notas, borrarNota, obtenerNotasNumeradas, formatoNotas, notasFiltradas } from "./notas.js";

export function mostrarNotas() {
  let listaNotas = document.getElementById("listaNotas");
  listaNotas.innerHTML = "";

  // Usar notasFiltradas si existe, sino usar todas las notas
  let notasAMostrar = notasFiltradas || notas;

  // Actualizar el contador
  let contadorNotas = document.getElementById("contadorNotas");
  contadorNotas.textContent = `Total de notas: ${notasAMostrar.length}`;

  // Obtener notas numeradas
  let notasNumeradas = notasAMostrar.map((nota, indice) => `${indice + 1}. ${nota}`);

  // Aplicar formato (mayúsculas/minúsculas)
  let notasTransformadas = notasNumeradas.map((nota) => {
    if (formatoNotas === "mayusculas") {
      return nota.toUpperCase();
    } else if (formatoNotas === "minusculas") {
      return nota.toLowerCase();
    }
    return nota;
  });

  // Mostrar las notas transformadas
  for (let i = 0; i < notasTransformadas.length; i++) {
    let li = document.createElement("li");
    li.textContent = notasTransformadas[i];

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", function() {
      borrarNota(i);
    });

    li.appendChild(botonBorrar);
    listaNotas.appendChild(li);
  }
}