`use strict`;

console.log("Condicionais!");

/* Comando utilizados em condicionais
if (se)
else (senão)
else if (senão se)

switch/case (escolha/caso)
*/
 
/* 
 
 Entramos em Operadores Relacionais: 
 > maior que
 < menor que
 >= maior ou igual a
 <= menor ou igual a 
 != diferente de
 == igualdade exata()

 */


// Condicional SIMPLES: testar outros valores em let numero para ver os resultados no console

let numero = 10;

if(numero > 5){
    console.log("Mensagem exibida pois a condição é VERDADEIRA!");
}

// Condicional COMPOSTA
let usuario = "Ozzy Osbourne";
let idade = 73;

if(idade >= 18){
    console.log(`${usuario} é maior de idade.`);
} else {
    console.log(`${usuario} é menor de idade.`);
}
