`use strict`;

// console.log("Arrays!") para ver se está funcionando na Aba console no navegador na aba de Inspecionar (console está entre fontes e elementos)

/* VETOR (ARRAY DE UMA DIMENSÃO) */

// Declarando um array de alunos
const alunos = ["William", "Vinicius", "Marli", "Duda", "Gabriel"];

// Exibindo a estrutura do array (somente no console)
console.log(alunos);

// Acessando individualmente alguns alunos ATRAVÉS DO ÍNDICE
console.log(alunos[1]); //Vinicius
console.log(alunos[3]); //Duda
console.log(alunos[0]); //William


const gostos = ["Macarrão", "Caipirinha", "Brigadeiro", "Sam Smith", "Hamburguer", "Restaurante", "São Paulo",];

console.log(gostos);

// Literal String
console.log(`Eu gosto muito de tomar uma ${gostos[1]} comendo um ${gostos[4]} aos finais de semana na cidade de ${gostos[6]}.`);

// Concatenação
console.log("Eu gosto muito de tomar uma "+gostos[1]+ " comendo um "+gostos[4]+" aos finais de semana na cidade de "+gostos[6]+".");

/* MATRIZ (um array com mais de uma dimensão) */

const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],

    ["PHP", "Node.js", "SQL", "Python", "Firebase"]
];

// linguagens Front-end estão no indice 0 e back-end no indice 1

console.log(tecnologias[0][1]); //CSS3