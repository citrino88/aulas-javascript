`use strict`;

/* Loops tradicionais mais usados:
- while (enquanto)
- for (para)

Normalmente, os loops são controlados através de uma variável contadora ou de alguma condição lógica para que o loop seja interrompido.
*/

// Loop WHILE
/* let contador = 1;

while(contador <= 5){
    console.log("valor do contador: "+contador);
    contador++;
} */

// Loop FOR
/* for( let i = 1; i <= 10; i++);{
    console.log("i vale: "+1);
} */

/* Obs: normalmente, variáveis de controle de repetição são chamandas de "i", "j", "k". */

// Loops para acessar arrays
/* const alunos = ["Chaves", "Chapolin", "Seu Madruga", "Kiko", "Jaiminho", "Bruxa do 71", "Florinda"]

for( let i = 0; i < alunos.length; i++ ){
    console.log(alunos[i]);
} */


// Loop exclusivo do JS para arrays: for/of
// para acessar uma aluno dentro de uma lista de alunos
/* for( const aluno of alunos ){
    console.log(aluno);
} */

// Loop exclusivo do JS para objetos: for/in
const livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016
};

console.log("--------------");

for(const prop in livro){
    console.log(livro[prop]);
}