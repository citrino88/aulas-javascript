`use strict`;

console.log("operadores lógicos");

//Requisitos para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

//Aluno de exemplo

let aluno = "Dayane";
let mediaFinal = 7;
let faltas = 4;
let resultado;

// Operador E (AND &&)
if( mediaFinal  >= mediaMinima && faltas <= limiteDeFaltas ){
    resultado = "aprovado"
} else {
    resultado = "reprovado"
}

console.log(resultado);

console.log("--------------------");

//No caso abaixo OU uma das condições não precisa necessariamente ser verdadeira.
// Operador OU/ OR (||) Obs: O símbolo | é chamado PIPE
let idade = 25;

if ( idade >= 18 || idade < 12){
    console.log("Você é um adulto ou criança!");
}else {
    console.log("Você é um adolescente");
}

let onibus = 2203;//2203 OU 2019

if (onibus == 2203 || onibus==2019){
    console.log("Passa no Senac, embarque!");
}else{
    console.log("Não passa no Senac, aguarde!");
}

console.log("-----------------");

//Operador NEGAÇÃO/NOT (!)
let blackFriday = false; // false simboliza "não vigorando"

//Se blackFriday NÃO FOR verdadeiro
if ( !blackFriday ){
    console.log("Preços normais...");
} else {
    console.log("Black Friday vigorando! Descontos!");
}