//Comentarios en JS
function encode(offset, message) { // declaramos la función encode para encriptar el texto
  let result= "";
  const upperLetter = message.toUpperCase(); //por cada caracter voy a obtener su valor en ASCII mediante charCodeAt
  for (let i=0; i < upperLetter.length; i++) {
    const messageAscii = upperLetter.charCodeAt(i);
    const newText = ((messageAscii - 65 + offset) % 26) + 65; //aplicamos la fórmula para el algoritmo
    result += String.fromCharCode(newText);
  }            
  return result; //imprimimos en consola e interfaz para ver el resultado
}

function decode(offset, message) {
  let result= "";
  const upperLetter = message.toUpperCase();
  for (let i=0; i < upperLetter.length; i++) {
    const messageAscii = upperLetter.charCodeAt(i);
    let newText = ((messageAscii - 65 - offset) % 26) + 65;
    if (newText < 65 ) {
      newText= (((messageAscii - 65 - offset) % 26) + 65 + 26);
    }
    result += String.fromCharCode(newText);
  }
  return result;
}

export default {encode, decode};