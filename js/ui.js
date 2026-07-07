import { notas, borrarNota, obtenerNotasNumeradas, formatoNotas } from "./notas.js";


export function mostrarNotas() {
  let listaNotas = document.getElementById("listaNotas");
  listaNotas.innerHTML = "";

  // Obtener notas numeradas
  let notasNumeradas = obtenerNotasNumeradas();

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