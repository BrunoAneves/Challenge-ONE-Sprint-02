let palavraSorteada;
let dicaSorteada;

const listaPalavras = [
  (palavra001 = {
    nome: "BANANA",
    dica: "FRUTA",
  }),
  (palavra002 = {
    nome: "SÃO LUÍS",
    dica: "LUGAR",
  }),
  (palavra002 = {
    nome: "MIRINZAL",
    dica: "LUGAR",
  }),
];

function geradorDePalavras() {
  const palavra = parseInt(Math.random() * listaPalavras.length);
  console.log(palavra);
  palavraSorteada = listaPalavras[palavra].nome;
  dicaSorteada = listaPalavras[palavra].dica;
  console.log(palavraSorteada);
  console.log(dicaSorteada);
}
geradorDePalavras();
