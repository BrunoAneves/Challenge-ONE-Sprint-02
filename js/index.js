let contadorChances = 6;
let listaDinamica = [];
let palavraSorteada;
let dicaSorteada;
let reiniciar = document.querySelector("#teclaReiniciar");
let desistir = document.querySelector("#teclaDesistir");

//########################################
let bntIniciar = document.querySelector(".bntIniciar");
let bntEscolherPalavra = document.querySelector(".bntEscolherPalavra");
const containerBotoesInicial = document.querySelector(
  ".container-botoes-inicial"
);

const containerTotal = document.querySelector(".container-total");
const containerForm = document.querySelector(".container-form");
const bntContainerForm = document.querySelector(".bnt-container-form");

function iniciarJogoDireto() {
  containerTotal.style.display = "flex";
  containerBotoesInicial.style.display = "none";
  geradorDePalavras();
  palavrasNaTela();
}
bntIniciar.onclick = iniciarJogoDireto;

function iniciarJogoComPalavraDeSuaEscolha() {
  containerBotoesInicial.style.display = "none";
  const containerForm = document.querySelector(".container-form");
  containerForm.style.display = "flex";
}
bntEscolherPalavra.onclick = iniciarJogoComPalavraDeSuaEscolha;

function escolherSuaPalavra(event) {
  event.preventDefault();
  geradorDePalavras2();
  palavrasNaTela();
  containerTotal.style.display = "flex";
  containerForm.style.display = "none";
  containerBotoesInicial.style.display = "none";
}
containerForm.onsubmit = escolherSuaPalavra;

function geradorDePalavras2() {
  const suaPalavra = document.getElementById("palavra").value.toUpperCase();
  palavraSorteada = suaPalavra;
  const suaDica = document.getElementById("dica").value.toUpperCase();
  dicaSorteada = suaDica;
}

//############################################

const listaPalavras = [
  (palavra001 = {
    nome: "BANANA",
    dica: "FRUTA",
  }),
  (palavra002 = {
    nome: "LARANJA",
    dica: "FRUTA",
  }),
  (palavra003 = {
    nome: "ABACATE",
    dica: "FRUTA",
  }),
  (palavra004 = {
    nome: "ABACAXI",
    dica: "FRUTA",
  }),
  (palavra005 = {
    nome: "ACEROLA",
    dica: "FRUTA",
  }),
  (palavra006 = {
    nome: "AMORA",
    dica: "FRUTA",
  }),
  (palavra007 = {
    nome: "CACAU",
    dica: "FRUTA",
  }),
  (palavra008 = {
    nome: "CAQUI",
    dica: "FRUTA",
  }),
  (palavra009 = {
    nome: "CARAMBOLA",
    dica: "FRUTA",
  }),
  (palavra010 = {
    nome: "FRAMBOESA",
    dica: "FRUTA",
  }),
  (palavra011 = {
    nome: "ANGOLA",
    dica: "PAÍS",
  }),
  (palavra012 = {
    nome: "BRASIL",
    dica: "PAÍS",
  }),
  (palavra013 = {
    nome: "CHINA",
    dica: "PAÍS",
  }),
  (palavra014 = {
    nome: "ARGENTINA",
    dica: "PAÍS",
  }),
  (palavra015 = {
    nome: "ALEMANHA",
    dica: "PAÍS",
  }),
  (palavra016 = {
    nome: "BAHAMAS",
    dica: "PAÍS",
  }),
  (palavra017 = {
    nome: "EQUADOR",
    dica: "PAÍS",
  }),
  (palavra018 = {
    nome: "GUATEMALA",
    dica: "PAÍS",
  }),
  (palavra019 = {
    nome: "HUNGRIA",
    dica: "PAÍS",
  }),
  (palavra020 = {
    nome: "IRLANDA",
    dica: "PAÍS",
  }),
  (palavra021 = {
    nome: "FAROFA",
    dica: "COMIDA",
  }),
  (palavra022 = {
    nome: "FEIJOADA",
    dica: "COMIDA",
  }),
  (palavra023 = {
    nome: "MOQUECA",
    dica: "COMIDA",
  }),
  (palavra024 = {
    nome: "ARROZ",
    dica: "COMIDA",
  }),
  (palavra025 = {
    nome: "CARNE",
    dica: "COMIDA",
  }),
  (palavra026 = {
    nome: "CHURRASCO",
    dica: "COMIDA",
  }),
  (palavra027 = {
    nome: "CAMAROADA",
    dica: "COMIDA",
  }),
  (palavra028 = {
    nome: "CARANGUEJADA",
    dica: "COMIDA",
  }),
  (palavra029 = {
    nome: "COXINHA",
    dica: "COMIDA",
  }),
  (palavra030 = {
    nome: "PASTEL",
    dica: "COMIDA",
  }),
  (palavra031 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra032 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra033 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra034 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra035 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra036 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra037 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra038 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra039 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
  (palavra040 = {
    nome: "CACHORRO",
    dica: "ANIMAL",
  }),
];

function bntReiniciar() {
  geradorDePalavras();
  palavrasNaTela();
  // document.location.reload(true);
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

function teclaClicada(letra) {
  document.querySelector("#tecla" + letra).disabled = true;
  if (contadorChances > 0) {
    mudarStilo("tecla" + letra, false);
    verificaLetra(letra);
    palavrasNaTela();
  }
}

function mudarStilo(tecla, condicao) {
  if (condicao == false) {
    document.getElementById(tecla).style.background = "red";
    document.getElementById(tecla).style.color = "#ffffff";
    document.getElementById(tecla).style.border = "1px solid black";
  } else {
    document.getElementById(tecla).style.background = "#0a3871";
    document.getElementById(tecla).style.color = "#ffffff";
    document.getElementById(tecla).style.border = "1px solid black";
  }
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
    mudarStilo("tecla" + letra, true);
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
  document.location.reload(true);
}

function mensagemVitoria() {
  alert("Você ganhou!");
  document.location.reload(true);
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
