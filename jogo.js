
var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 15; // Tempo de jogo em segundos
var criaMoscaTempo = 2000; // Tempo de criação de moscas em milissegundos

var nivel = window.location.search; // Pega o nível do jogo da URL
nivel = nivel.replace("?", ""); // Remove o '?' da string

if (nivel === "facil") {
  criaMoscaTempo = 2000; // Tempo de criação de moscas para o nível fácil
} else if (nivel === "normal") {
  criaMoscaTempo = 1300; // Tempo de criação de moscas para o nível normal
} else if (nivel === "dificil") {
  criaMoscaTempo = 750; // Tempo de criação de moscas para o nível difícil
}

function ajustarTamanho() {
  largura = window.innerWidth;
  altura = window.innerHeight;
}
ajustarTamanho();

var cronometro = setInterval(function() {
  tempo--; // Decrementa o tempo a cada segundo

  if (tempo < 0) {
    clearInterval(cronometro); // Para o cronômetro
    clearInterval(criaMosca); // Para a criação de moscas
    alert("Fim de jogo! Você venceu!"); // Mensagem de fim de jogo
    window.location.href = "fim_jogo.html?resultado=vitoria"; // Redireciona para a página de fim de jogo
  } else{
    document.getElementById("cronometro").innerHTML = tempo; // Atualiza o cronômetro na tela
  }

}, 1000); // 1000 ms = 1 segundo

function posicaoRandomica() {

    // Remover o mosquito anterior, se existir
    var mosquitoAnterior = document.getElementById("mosquito");
    if (mosquitoAnterior) {
      mosquitoAnterior.remove();
      if(vidas > 3) {
        alert("Você perdeu todas as vidas! Tente novamente.");
        window.location.href = "fim_jogo.html?resultado=derrota"; // Reinicia o jogo
      }
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"; // Atualiza a imagem do coração
      vidas++; // Incrementa o número de vidas

    }

    var posicaoX = Math.floor(Math.random() * (largura - 90));
    var posicaoY = Math.floor(Math.random() * (altura - 90));

    posixaoX = posicaoX < 0 ? 0 : posicaoX; // Garantindo que a posição X não seja negativa
    posicaoY = posicaoY < 0 ? 0 : posicaoY; // Garantindo que a posição Y não seja negativa

    //criando o elemento html

    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosca.png";
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); // Chama a função para definir a classe aleatória
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito"; // Adiciona um ID ao mosquito para referência futura

    mosquito.onclick = function() {
        this.remove(); // Remove o mosquito ao clicar nele
    }

    document.body.appendChild(mosquito);
    
}

function tamanhoAleatorio(){

  var classes = Math.floor(Math.random() * 3);

  switch(classes){
    case 0:
        return "mosquito1";
        
    case 1:
        return "mosquito2";
        
    case 2:
        return "mosquito3";
        
  }

}

function ladoAleatorio(){
  var classes = Math.floor(Math.random() * 2);

  switch(classes){
    case 0:
        return "ladoA";
        
    case 1:
        return "ladoB";
        
  }
}