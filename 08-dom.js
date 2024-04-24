`use strict`;

/* Funções/métodos mais comuns para seleção de elementos no DOM

- getElementById()
Selecionar UM ELEMENTO através do atributo ID

- querySelector()
Seleciona UM ELEMENTO através de seletor baseado na lógica CSS

- querySelectorAll()
Seleciona VÁRIOS ELEMENTOS através de seletor(es) baseado na lógica CSS

*/

// Exemplo 1: getElementById()
// document : acessa a pagina inteira como se fosse Raiz

const legenda = document.getElementById("legenda");

console.log(legenda);

// Exemplo 2: querySelector()

const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini-exercicio
1) Faça o acesso/seleção do h2 de Back-End e mostre no console.

2) Faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console.
*/

const backEnd = document.querySelector(".back-end");
console.log(backEnd);

const editoresCodigo = document.querySelector(".editores h2");
console.log(editoresCodigo);



const subtitulo = document.querySelector("h2");
console.log(subtitulo);
// nesse caso acima só esta pegando o Primeiro h2

// Exemplo 3 : querySelectorAll() obs: funciona parecido com Array
const subtitulosH2 = document.querySelectorAll("h2");
console.log(subtitulosH2);
// o caso acima o console está mostrando um Array com todos h2 do documento html

const variosElementos = document.querySelectorAll("p, a, p b, #teste, .xyz, ol")
console.log(variosElementos);