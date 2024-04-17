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

// Variável com próposito de guardar a palavra "maior" ou "menor", isto é, trocamos somente o que realmente muda no texto.

let texto; // undefined / indefinida

if(idade >= 18){
    texto = "maior";
    // console.log(`${usuario} é maior de idade.`); este foi o primeiro jeito de fazer sem a variavel texto
} else {
    texto = "menor"
    // console.log(`${usuario} é menor de idade.`); este foi o primeiro jeito de fazer sem a variavel texto
}

console.log(`${usuario} é ${texto} de idade.`); // este é outro exemplo de fazer usando apenas uma saida só de "impressão" no console

