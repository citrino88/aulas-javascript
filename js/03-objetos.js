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

// Objeto com array e outro objeto
const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,

    /*  Obs: usamos aspas neste caso pois não se trata de números matemáticos ou monetários. */
    telefones: ["11-2135-0300", "11-96666-5555"],

    // Propriedade como objeto
    medidasFisicas: {
        peso: 75,
        altura: 1.66
    }
}

console.log(
    `O ${pessoa.nome} tem ${pessoa.medidasFisicas.peso} kg e ${pessoa.medidasFisicas.altura} metros de altura. Contato: ${pessoa.telefones[1]}.`
)

// Array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Crônicas de Nárnia",
        autor: "C.S. Lewis"
    },
    {
        titulo: "Crônicas de Olam",
        autor: "L.L. Wurlitzer"
    }
];

console.log(livros); //no console aparece q é um array com 3 objetos {...}
console.log(livros[1].titulo); //Crônicas de Nárnia

console.log("----------------");

/* Alternativa para exibição e análise  */

console.table(livros);