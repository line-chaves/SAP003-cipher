//adicionando eventos aos cliques dos botões 
document.getElementById("btncodificar").addEventListener("click", dadosencode);
document.getElementById("btndecodificar").addEventListener("click", desencode);
//função de dados do encode
function dadosencode() {
  event.preventDefault();
  let mensagem = document.getElementById("str").value; //variavel responsavel por armazenar a palavra que o usuario digitar
  let deslocamento = Number(document.getElementById("num").value); //variavel responsavel por armazenar o deslocamento, o Number converteu o valor para numero

  let criptografado = window.cipher.encode(deslocamento, mensagem); //chamando a função de encode do cipher, e atribuindo os valores.
   
  document.getElementById("retorno").innerHTML= criptografado; //enviando a resposta para a tela por meio do HTML
}
//função de dados do desencode
function desencode () {
  event.preventDefault();
  let mensagemD = document.getElementById("str").value;
  let deslocamentoD = Number(document.getElementById("num").value);

  let descriptografado = window.cipher.decode(deslocamentoD, mensagemD);

  document.getElementById("retorno").innerHTML= descriptografado;
}