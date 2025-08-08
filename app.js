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
}





