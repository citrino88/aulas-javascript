`use strict`;

console.log("Objetos!");

//Declarando um objeto. OBSERVAÇÃO para criar OBJETOS usamos as CHAVES{} em ARRAY usamos colchetes[]
const livro= {
    //livro: é o objeto que foi criado(e ele tem as propriedades e valores abaixo)
    //título: é a propriedade
    //Senhor dos Anéis: é um dos valores da propriedade
    título: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volume: 3,
    ano: 1954

};

console.log(livro);
console.log(livro.título);
console.log(livro.autor);

console.log(
    `O ${livro.título} foi criado por ${livro.autor}.`
);

const carro= {
    marca: "Fiat",
    modelo: "Uno",
    anoDeFabricacao: "1996",
    portas: "2",
    cor: "branco",
    listaopcionais:["ar-condicionado","vidros eletricos","alarmes"]
}


console.log(
    `O ${carro.marca} ${carro.modelo} fabricado em ${carro.anoDeFabricacao} com ${carro.portas} portas e com ${carro.listaopcionais[1]}, foi um famoso carro no Brasil.`
);