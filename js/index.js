let contadorChances = 6;
let listaDinamica = [];
let palavraSorteada;
let dicaSorteada;
let reiniciar = document.querySelector("#teclaReiniciar");
let desistir = document.querySelector("#teclaDesistir");

//###################### menu do jogo #####################
let bntIniciar = document.querySelector(".bntIniciar");
let bntEscolherPalavra = document.querySelector(".bntEscolherPalavra");
const containerBotoesInicial = document.querySelector(
  ".container-botoes-inicial"
);

const containerTotal = document.querySelector(".container-total");
const containerForm = document.querySelector(".container-form");
// const bntContainerForm = document.querySelector(".bnt-container-form");

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

//################# jogo #################
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
    nome: "PANQUECA",
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
    nome: "ZEBRA",
    dica: "ANIMAL",
  }),
  (palavra033 = {
    nome: "BESOURO",
    dica: "ANIMAL",
  }),
  (palavra034 = {
    nome: "ENGUIA",
    dica: "ANIMAL",
  }),
  (palavra035 = {
    nome: "FUINHA",
    dica: "ANIMAL",
  }),
  (palavra036 = {
    nome: "GIRINO",
    dica: "ANIMAL",
  }),
  (palavra037 = {
    nome: "HIENA",
    dica: "ANIMAL",
  }),
  (palavra038 = {
    nome: "KOALA",
    dica: "ANIMAL",
  }),
  (palavra039 = {
    nome: "LONTRA",
    dica: "ANIMAL",
  }),
  (palavra040 = {
    nome: "TUCANO",
    dica: "ANIMAL",
  }),
  (palavra041 = {
    nome: "AGULHA",
    dica: "OBJETO",
  }),
  (palavra042 = {
    nome: "ASPIRADOR",
    dica: "OBJETO",
  }),
  (palavra043 = {
    nome: "BORRACHA",
    dica: "OBJETO",
  }),
  (palavra044 = {
    nome: "CADEADO",
    dica: "OBJETO",
  }),
  (palavra045 = {
    nome: "DISQUETE",
    dica: "OBJETO",
  }),
  (palavra046 = {
    nome: "EDREDOM",
    dica: "OBJETO",
  }),
  (palavra047 = {
    nome: "FREEZER",
    dica: "OBJETO",
  }),
  (palavra048 = {
    nome: "GRAMPO",
    dica: "OBJETO",
  }),
  (palavra049 = {
    nome: "HIDRANTE",
    dica: "OBJETO",
  }),
  (palavra050 = {
    nome: "ZARABATANAP",
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
  let imagem = [
    "svg/1.svg",
    "svg/2.svg",
    "svg/3.svg",
    "svg/4.svg",
    "svg/5.svg",
    "svg/6.svg",
    "svg/total.svg",
  ];

  switch (contadorChances) {
    case 5:
      document.querySelector(".container-img").src = imagem[1];
      break;
    case 4:
      document.querySelector(".container-img").src = imagem[2];
      break;
    case 3:
      document.querySelector(".container-img").src = imagem[3];
      break;
    case 2:
      document.querySelector(".container-img").src = imagem[4];
      break;
    case 1:
      document.querySelector(".container-img").src = imagem[5];
      break;

    case 0:
      document.querySelector(".container-img").src = imagem[6];
      break;
    default:
      document.querySelector(".container-img").src = imagem[0];
      break;
  }
}
