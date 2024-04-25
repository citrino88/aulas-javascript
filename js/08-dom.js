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

/* Modificando o DOM:
Podemos alterar contéudo, tags, estilos, criar elementos, remover elementos etc.
*/

// Alteração de contéudo textual
legenda.textContent = "Imagem do modelo de objetos do documentos"

// Alteração de conteúdo com suporte à tags
sobreFront.innerHTML = "<i>Front-End</i>"

// Alteração de estilos inline (CSS in JS)
backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// Aplicação de classes CSS via JavaScript
titulo.classList.add("destaque");

const listaDeEditores = [
    {
        nome: "Visual Studio Code",
        finalidade: "Desenvolvimento web em geral"
    },
    {
        nome: "Android Studio",
        finalidade: "Desenvolvimento de aplicações Android"
    },
    {
        nome: "Xcode",
        finalidade: "Desenvolvimento de aplicações IOS"
    }

];

// Acessando/selecionando a lista que será usada no HTML
const lista = document.querySelector(".lista");
console.log(lista);

/* Percorrer o array de listaDeEditores, criar os itens <li> com o conteúdo do
array e adicioná-los a lista HTML. */

// for( variavel / constante de acesso of arrayComDadosQueQueremosAcessar){}
for (const editor of listaDeEditores) {
    console.log(editor.nome);


    // Etapa 1: criar elemento <li>
    // aqui eu crio a tag ==> document.createElement("li");
    const item = document.createElement("li"); //guardo na memoria

    // Etapa 2: adicionar conteúdo ao novo elemento
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;

    // Etapa 3: adicionar o elemento a lista <ol>
    lista.appendChild(item);
};

/* Criando/configurando atributo HTML via JS */
const linksDeReferencia = document.querySelectorAll(".referencias a");
console.log(linksDeReferencia);

for(const link of linksDeReferencia){
    console.log(link);
    link.setAttribute("target", "_blank");
}