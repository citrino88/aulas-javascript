`use strict`;

// Dados de entrada
let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;
//let valorEmReal = 5160;

//let conversaoDolarEmReal = cotacaoDoDia * valorEmDolar;
//let conversaoRealEmDolar = valorEmReal / cotacaoDoDia;

//console.log(conversaoDolarEmReal);
//console.log(conversaoRealEmDolar);

/* 1) Crie uma funÃ§Ã£o para converter */

function converterEmReais(valor){
    return valor * cotacaoDoDia;

}

/* 2.1) Chame a funÃ§Ã£o e passe pra ela o valorEmDolar como
parÃ¢metro */

//Versão sem formatação 
console.log( converterEmReais (valorEmDolar));

/* 2.2) Mostre no console o retorno da funÃ§Ã£o */

console.log(`-----------------------------`);

function formatarMoeda(valor, siglaDaMoeda, localizacao){
    const opcoes = {
        style: "currency",
        currency: siglaDaMoeda
    };

    return new Intl.NumberFormat(
        localizacao, opcoes
    ).format(valor);
}

// Versão sem formatação
console.log( converterEmReais(valorEmDolar) );

// Versão 1 (função como parâmetro para outra função) com formatação
console.log( 
    formatarMoeda( converterEmReais(valorEmDolar), "BRL", "pt-br" ) 
);

// Versão 2 (primeiro, guardamos o resultado da conversão; depois passamos o resultado para a formatação)
let resultadoEmReais = converterEmReais(valorEmDolar);
console.log( formatarMoeda(resultadoEmReais , "BRL", "pt-br") );

//Formatação valor em dólar
console.log( formatarMoeda(valorEmDolar , "USD", "en") );