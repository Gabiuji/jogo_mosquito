
var largura = 0;
var altura = 0;
var vidas = 1;

function ajustarTamanho() {
  largura = window.innerWidth;
  altura = window.innerHeight;
}
ajustarTamanho();

function posicaoRandomica() {

    // Remover o mosquito anterior, se existir
    var mosquitoAnterior = document.getElementById("mosquito");
    if (mosquitoAnterior) {
      mosquitoAnterior.remove();
      if(vidas > 3) {
        alert("Você perdeu todas as vidas! Tente novamente.");
        window.location.reload(); // Reinicia o jogo
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
        posicaoRandomica(); // Chama a função novamente para criar um novo mosquito
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