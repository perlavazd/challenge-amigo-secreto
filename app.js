// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo (event){
    event.preventDefault();
    let campoEntrada = document.getElementById("amigo").value.trim();
    if (campoEntrada === ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(campoEntrada);
        console.log(amigos);
        document.getElementById('amigo').value = '';
    }
    lista();
}


function lista (){

    let listaGenerada = document.getElementById("listaAmigos");
    listaGenerada.innerHTML = ""

    for (let i=0; i<amigos.length; i++){
        let elementoLi = document.createElement("li");
        elementoLi.textContent = amigos[i];
        listaGenerada.appendChild(elementoLi);
    }

}

function sortearAmigo(event){
    event.preventDefault();
    if (amigos.length === 0){
        alert("Por favor, inserte nombres antes de sortear");
    }else{
        let numeroSorteado= Math.floor(Math.random() * (amigos.length));
        console.log(amigos[numeroSorteado]);

        let listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = ""
        listaResultado.innerHTML = `<li>${amigos[numeroSorteado]}</li>`;

    }
}







