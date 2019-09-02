window.cipher = {
  encode: encode,
  decode: decode
};
//função encode
function encode(offset, mensagem) {
  let retorno = ""; //string vazia

  //laço de repetição
  for (let i = 0; i < mensagem.length; i++) {
    let codigoAsc = mensagem.charCodeAt(i); //obtendo o codigo ascii do parâmetro mensagem
    //condição que verifica se o offset é positivo
    if (offset > 0) {
      //inicio das condições para letras A,a e @
      //letra maiuscula
      if (codigoAsc >= 65 && codigoAsc <= 90) {
        retorno += String.fromCharCode(((codigoAsc - 65 + offset) % 26) + 65);
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
    //offset negativo
    else {
      (offset < 0);
      //letra maiuscula
      if (codigoAsc >= 65 && codigoAsc <= 90) {
        retorno += String.fromCharCode(((codigoAsc - 90 + offset) % 26) +90);
      }
      //letra minuscula
      if (codigoAsc >= 97 && codigoAsc <= 122) {
        retorno += String.fromCharCode(((codigoAsc - 122 + offset) % 26) +122);
      }
      //caractere especial e numeros
    else  {
        retorno += mensagem;
      }
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
    // condição para verificar se o offset é positivo
    if (offset>0) {
      //inicio das condições A,a,@
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
    else {
      (offset<0); //offset negativo
      //Letra maiuscula
      if (CodAsc >= 65 && CodAsc <= 90) {
        result += String.fromCharCode(((CodAsc - 65 - offset) % 26) + 65);
      }
      //letra minuscula
      if (CodAsc >= 97 && CodAsc <= 122) {
        result += String.fromCharCode(((CodAsc - 97 - offset) % 26) + 97);
      }
      //caractere especial e numeros
    else {
        result = mensagem;
      }
    }
  }
  return result; //retorno do decode
}