`use strict`

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video")

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

// Criando um objeto de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif"; // ou meme.gif


/* Se quiser criar referência de vídeo via JS */
// const video = document.createElement("video");
// video.src = "pink-floyd.mp4";
// video.width = 354;
// video.height = 196

/* Criando um Ouvinte de Evento (Event Listener)
O primeiro parâmetro do addEvenListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmetro é uma função (conhecida como callBack "uma chamada de função") responsável por executar ações no momento em que o evento acontecer.
*/ 
// prestar atenção quando escrever o nome do evento, se escrever errado o VSC, não avisa nem aparece erro no console.
exemplo01.addEventListener("click", function(){
   // alert("Oieeeeeeee");
   // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza! Evento Acionado, função executada 😍";

    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte do body
    pagina.style.fontFamily = "Garamond";

    // Executando o áudio
    efeitoSonoro.play();

    // inserir um elemento após o mensagem
    mensagem.insertAdjacentElement("afterend", imagem);
    /* mensagem.insertAdjacentElement("afterend", video);
    video.play(); com o restante do codigo na linha 18 a 19*/

    // Remover o atributo hidden (isso fará o vídeo aparecer)
    video.removeAttribute("hidden");
    video.play(); // Reproduzir o vídeo
});

/* Exemplo Modo Noturno */
const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");

botao.addEventListener("click", function() {
    //alert ("Vaiiiiiii!");
    /* Usamos para alternar entre os estados de classe (aplicada e não aplicada) */
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");

    /* 🔥 Desafio!!! 🔥 */

    /* 1) Aplicar um efeito de mudança de cores suave */
    pagina.style.transition = "2s";
    divContainer.style.transition ="2s"
    /* 2) Fazer o botão muda de texto, ou seja, inicia com o texto "Ativar" e troca para texto "Desativar" conforme o que estiver acontecendo. */
    
    /* if (botao.textContent == "Ativar"){
        botao.textContent = "Desativar"
    }else{
        botao.textContent = "Ativar"
    } */

    /* Solução 2: analisar onde a classe foi aplicada 
    Neste caso, se a pagina estiver com a classe noturno aplicada...*/
    if (pagina.classList.contains ("noturno")){
        // ...então mude o texto para Desativar
        botao.textContent = "Desativar"
    }else{
        // ...senão, mude o texto para Ativar
        botao.textContent = "Ativar"
    }
    
    
    
});

/* Sobre o duplo sinal de igual ==
e o triplo sinal de igual ===

==      IGUALDADE   (considera somente o valor)
===     IGUALDADE ESTRITA  (considera o valor E o tipo de dado)

*/

let a = 10;
let b = "10";
console.log( a == b); // true (verdadeiro)
console.log( a === b); // false (falso) virou uma String (tipo de dado é diferente)