// Atividade Encontro Remoto 01 da UC8.
// Sistema de cadastro de peças.

let listaQtdPecas = 8;
let peso = 400;
let nomePeca = "pistão";

if(listaQtdPecas >= 10){
    console.log("Não há capacidade na lista: Caixa Lotada")
} 

if(peso >= 100) {
    console.log("Peso da peça possui requisitos para cadastrar")
} else {
    console.log("Peso inferior aos requisitos para cadastro")
} 
     
if(nomePeca.length < 3){
    console.log("Nome inválido. O nome da peça precisa ter ao menos 3 caracteres")
} else {
    console.log("Peça cadastrada com sucesso")
}