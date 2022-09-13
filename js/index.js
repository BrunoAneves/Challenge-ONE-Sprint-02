let contadorChances = 6;
let listaDinamica = [];
let palavraSorteada;
let dicaSorteada;
let reiniciar = document.querySelector("#teclaReiniciar");
let desistir = document.querySelector("#teclaDesistir");

const listaPalavras = [
  (palavra001 = {
    nome: "BANANA",
    dica: "FRUTA",
  }),
  (palavra002 = {
    nome: "MIRINZAL",
    dica: "LUGAR",
  }),
  (palavra002 = {
    nome: "CANETA",
    dica: "OBJETO",
  }),
];

function bntReiniciar() {
  document.location.reload(true);
}
reiniciar.onclick = bntReiniciar;

function bntDesistir() {
  mensagemDerrota();
}
desistir.onclick = bntDesistir;

function geradorDePalavras() {
  const palavra = parseInt(Math.random() * listaPalavras.length);
  palavraSorteada = listaPalavras[palavra].nome;
  dicaSorteada = listaPalavras[palavra].dica;
}
geradorDePalavras();

function palavrasNaTela() {
  const dica = document.querySelector(".container-dica");
  dica.innerHTML = "Dica: " + dicaSorteada;

  const palavra = document.querySelector(".container-palavra-secreta");
  palavra.innerHTML = "";

  for (i = 0; i < palavraSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavra.innerHTML =
        palavra.innerHTML +
        "<div class='container-letra'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavra.innerHTML =
        palavra.innerHTML +
        "<div class='container-letra'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}
palavrasNaTela();

function teclaClicada(letra) {
  document.querySelector("#tecla" + letra).disabled = true;
  if (contadorChances > 0) {
    mudarStilo("tecla" + letra);
    verificaLetra(letra);
    palavrasNaTela();
  }
}

function mudarStilo(tecla) {
  document.getElementById(tecla).style.background = "#0a3871";
  document.getElementById(tecla).style.color = "#ffffff";
  document.getElementById(tecla).style.border = "1px solid black";
}

function verificaLetra(letra) {
  const posicao = palavraSorteada.indexOf(letra);
  if (posicao < 0) {
    contadorChances--;
    mudaImagensForca();

    if (contadorChances == 0) {
      setTimeout(mensagemDerrota, 100);
    }
  } else {
    for (i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }
  let vitoria = true;
  for (i = 0; i < palavraSorteada.length; i++) {
    if (palavraSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria) {
    contadorChances = 0;
    setTimeout(mensagemVitoria, 100);
  }
}

function mensagemDerrota() {
  alert("Você perdeu!" + "\n" + "A palavra é " + palavraSorteada);
}

function mensagemVitoria() {
  alert("Você ganhou!");
}

function mudaImagensForca() {
  switch (contadorChances) {
    case 5:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/2.svg')";
      break;
    case 4:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/3.svg')";
      break;
    case 3:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/4.svg')";
      break;
    case 2:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/5.svg')";
      break;
    case 1:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/6.svg')";
      break;

    case 0:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/total.svg')";
      break;
    default:
      document.querySelector(".container-img").style.backgroundImage =
        "url('../svg/1.svg')";
      break;
  }
}
