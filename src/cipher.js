window.cipher = {
  encode: encode,
  decode: decode
};
//função encode
function encode(offset, mensagem) {
  let retorno = "";

  //laço de repetição
  for (let i = 0; i < mensagem.length; i++) {
    let codigoAsc = mensagem.charCodeAt(i); //obtendo o codigo ascii do parâmetro mensagem
    //letra maiuscula
    if (codigoAsc >= 65 && codigoAsc <= 90) {
      let number = (offset>0) ? 65 : 90; //verificando se o offset é positivo
      retorno += String.fromCharCode(((codigoAsc - number + offset) % 26) + number);
    }
    //letra minuscula
    else if (codigoAsc >= 97 && codigoAsc <= 122) {
      let number = (offset>0) ? 97 : 122;
      retorno += String.fromCharCode(((codigoAsc - number + offset) % 26) + number);
    }
    //caractere especial e numeros
    else {
      retorno += String.fromCharCode(codigoAsc);
    }
  }
  return retorno;
}
//função decode
function decode(offset, mensagem) {
  let result = "";
  //laço de repetição 
  for (let j = 0; j < mensagem.length; j++) {
    let CodAsc = mensagem.charCodeAt(j);
    //letra maiuscula
    if (CodAsc >= 65 && CodAsc <= 90) {
      let number = (offset>0) ? 90 : 65; //verificando se o offset é positivo
      result += String.fromCharCode(((CodAsc - number - offset) % 26) + number);
    }
    //letra minuscula
    else if (CodAsc >= 97 && CodAsc <= 122) {
      let number = (offset>0) ? 122 : 97;
      result += String.fromCharCode(((CodAsc - number - offset) % 26) + number);
    }
    //caractere especial e numeros 
    else {
      result += String.fromCharCode(CodAsc);
    }
  }
  return result;
}