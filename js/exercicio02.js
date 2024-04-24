'use strict';

const clientes = [
    { id: 1, nome: "Goku" },
    { id: 2, nome: "Naruto" },
    { id: 3, nome: "Shiryu" }
];

// Versão usando loop for

// Armazenando em cache (memória) o tamanho do array antes de iniciar o loop
let quantidade = clientes.length; // bom para perfomance!

for( let i = 0; i < quantidade; i++ ){
    console.log(`Cliente: ${clientes[i].nome} (id: ${clientes[i].id})`);
}

console.log("--------------");

// Versão usando for/of
/* Acessando 'cada cliente' (que é objeto) DENTRO do array 'clientes' */
for( let cliente of clientes ){
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
}