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

console.log("if/else usando ternário ?:");
let texto2 = idade >= 18; //dá valor boolean True se a idade lá em cima do Ozzy estiver maior ou igual a 18.
console.log(texto2);

//usando ternario ?:
let texto3 = idade >= 18 ? "maior" : "menor";
console.log(texto3);
console.log(`${usuario} é ${texto3} de idade.`);

//Aplicando ternario direto dentro do template string
console.log(`${usuario} é ${idade >= 18 ? "maior" : "menor"} de idade.`);

// Condicional ENCADEADA/SUCESSIVA

let texto4;

if(idade >= 60){
    texto4 = "idoso(a)";
} else if (idade >= 18){
    texto4 = "adulto(a)";
} else {
    texto4 = "menor de idade";
}
console.log(`${usuario} tem ${idade} anos e é ${texto4}. `);

// ir testando os valores em idade lá em cima, no caso do Ozzy, trocando as idades, e ver o que aparece para qualquer idade, ex: 55, 8, 19, 60, etc.

console.log("--------------");

// Condicional switch/case
//switch=avalie, case = olhe esse caso, 

let opcao = 1;
let mensagem;

switch (opcao) {
    case 1: mensagem = "Informações"; break;
    case 2: mensagem = "Reclamações"; break;
    case 3: mensagem = "Elogios"; break;
    default: mensagem = "Falar com o atendente"; break;
}

console.log("Opção escolhida: "+opcao);
console.log("Mensagem: "+mensagem);