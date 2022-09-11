let contadorChances = 6;
let listaDinamica = [];
let palavraSorteada;
let dicaSorteada;

const listaPalavras = [
  (palavra001 = {
    nome: "BANANA",
    dica: "FRUTA",
  }),
  (palavra002 = {
    nome: "SAO LUIS",
    dica: "LUGAR",
  }),
  (palavra002 = {
    nome: "CANETA",
    dica: "OBJETO",
  }),
];

function geradorDePalavras() {
  const palavra = parseInt(Math.random() * listaPalavras.length);
  palavraSorteada = listaPalavras[palavra].nome;
  console.log(palavraSorteada);
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
    alert("ganhou");
    contadorChances = 0;
  }
}
