window.cipher = {
  encode: function(offset,string){
    let retorno = ""
    for( i = 0; i < string.length; i++){
      let word = string[i];
      let wordNum = word.charCodeAt(0); //obtendo o codigo asc 
      wordNum = parseInt(wordNum);
      let asc = ((wordNum-65+offset)%26+65);
      wordstr= String.fromCharCode(asc);//tranformando o asc em char
      retorno += wordstr
    }
  }
  decode:decode
  
  // ... 
};
encode: function(offset,string){
  let retorno = ""
  for( i = 0; i < string.length; i++){
    let word = string[i];
    let wordNum = word.charCodeAt(0); //obtendo o codigo asc 
    wordNum = parseInt(wordNum);
    let asc = ((wordNum-65+offset)%26+65);
    wordstr= String.fromCharCode(asc);//tranformando o asc em char
    retorno += wordstr
  /*posso usar toUpperCase transformar em maiuscula.. .lenght para para pegar o tamanho da string(eu acho)... 
  charCodeAt() vai retornar o codigo da letra... String. ...fromCharCode... toLowerCase() vou sar para transformar em minuscula... 
  push para empurrar um valor para a o array ou variavel... .join*/
  /*formula para codificar... 
  ((possição da letra)-65+33)%26+65*/
  }
}

function decode(offset,string){
  for( i = 0; i < string.length; i++){
    let worD = string[i];
    let worDNum = worD.charCodeAt(0);
    return((worDNum-65+offset)%26+65);
  }
  //formula para decodar

}
