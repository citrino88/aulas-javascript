`use strict`

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Criando um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

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
});