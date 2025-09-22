let amigos = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }
  amigos.push(nombre);
  mostrarLista();
  input.value = ""; 
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar lista antes de volver a pintarla
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
