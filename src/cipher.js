window.cipher = {
  encode: encode,
  decode: decode
};
//função encode
function encode(offset, mensagem) {
  let retorno = "";

  //laço de repetição
  for (let i = 0; i < mensagem.length; i++) {
    let codigoAsc = mensagem.charCodeAt(i);
    //inicio da condição.
    //letra maiuscula
    if (codigoAsc >= 65 && codigoAsc <= 90) {
      retorno += String.fromCharCode(((mensagem.charCodeAt(i) - 65 + offset) % 26) + 65);
    }
    //letra minuscula
    else if (codigoAsc >= 97 && codigoAsc <= 122) {
      retorno += String.fromCharCode(((codigoAsc - 97 + offset) % 26) + 97);
    }
    //caractere especial e numeros
    else {
      (codigoAsc >= 32 && codigoAsc <= 64);
      retorno += String.fromCharCode(codigoAsc);
    }
  }
  return retorno;
}
//função decode para letras 
function decode(offset, mensagem) {
  let result = "";
//laço de repetição 
  for (let j = 0; j < mensagem.length; j++) {
    let CodAsc = mensagem.charCodeAt(j);
    //inicio da condição 
    //letra maiuscula
    if (CodAsc >= 65 && CodAsc <= 90) {
      result += String.fromCharCode(((CodAsc - 90 - offset) % 26) + 90);
    }
    //letra minuscula
    else if (CodAsc >= 97 && CodAsc <= 122) {
      result += String.fromCharCode(((CodAsc - 122 - offset) % 26) + 122);
    }
    //caractere especial e numeros 
    else {
      (CodAsc >= 32 && CodAsc <= 64);
      result += String.fromCharCode(CodAsc);
    }
  }
  return result;
}