
var largura = 0;
var altura = 0;

function ajustarTamanho() {
  largura = window.innerWidth;
  altura = window.innerHeight;
}
ajustarTamanho();

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * (largura - 50));
    var posicaoY = Math.floor(Math.random() * (altura - 50));

    posixaoX = posicaoX < 0 ? 0 : posicaoX; // Garantindo que a posição X não seja negativa
    posicaoY = posicaoY < 0 ? 0 : posicaoY; // Garantindo que a posição Y não seja negativa

    //criando o elemento html

    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosca.png";
    mosquito.className = "mosquito1";
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = "absolute";
    document.body.appendChild(mosquito);
}

