let nomeUsuario ="";
let elemento = document.querySelector("#nome-usuario")

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual é o seu nome?");
}

if(nomeUsuario == null){
    elemento.testContent = "seja bem vindo";
}else{
   elemento.textContent = nomeUsuario
}