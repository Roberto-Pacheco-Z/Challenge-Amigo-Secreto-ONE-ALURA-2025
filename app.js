/* Challenge del amigo secreto. Creado por Roberto Aldair Pacheco Zermeño */

let amigos = [];

function agregarAmigo() {

    if (document.getElementById("amigo").value === '') {
        alert('Por favor, ingrese un nombre')
    } else {
        let nuevoAmigo = document.getElementById("amigo").value;
        amigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
      }
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random()*amigos.length);
    const listaDos = document.getElementById("resultado");
    const liDos = document.createElement("li");
    liDos.textContent = "El amigo secreto sorteado es : " + amigos[amigoSorteado];
    listaDos.appendChild(liDos); 
}