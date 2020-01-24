window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, mensagem) {
  let retorno = "";


  for (let i = 0; i < mensagem.length; i++) {
    let codigoAsc = mensagem.charCodeAt(i);

    if (codigoAsc >= 65 && codigoAsc <= 90) {
      let number = (offset > 0) ? 65 : 90;
      retorno += String.fromCharCode(((codigoAsc - number + offset) % 26) + number);
    }

    else if (codigoAsc >= 97 && codigoAsc <= 122) {
      let number = (offset > 0) ? 97 : 122;
      retorno += String.fromCharCode(((codigoAsc - number + offset) % 26) + number);
    }

    else {
      retorno += String.fromCharCode(codigoAsc);
    }
  }
  return retorno;
}

function decode(offset, mensagem) {
  let result = "";

  for (let j = 0; j < mensagem.length; j++) {
    let CodAsc = mensagem.charCodeAt(j);

    if (CodAsc >= 65 && CodAsc <= 90) {
      let number = (offset > 0) ? 90 : 65;
      result += String.fromCharCode(((CodAsc - number - offset) % 26) + number);
    }

    else if (CodAsc >= 97 && CodAsc <= 122) {
      let number = (offset > 0) ? 122 : 97;
      result += String.fromCharCode(((CodAsc - number - offset) % 26) + number);
    }

    else {
      result += String.fromCharCode(CodAsc);
    }
  }
  return result;
}