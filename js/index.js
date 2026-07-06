let notas = [];
function guardarNota() {
  let inputNota = document.getElementById("inputNota");
  let texto = inputNota.value;
  
  if (texto !== "") {
    notas.push(texto);
    inputNota.value = "";
    mostrarNotas();
  }
}
function mostrarNotas() {
  let listaNotas = document.getElementById("listaNotas");
  listaNotas.innerHTML = "";
  
  for (let i = 0; i < notas.length; i++) {
    let li = document.createElement("li");
    li.textContent = notas[i];
    listaNotas.appendChild(li);
  }
}
