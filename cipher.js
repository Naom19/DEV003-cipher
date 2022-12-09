//Comentarios en JS

// declaramos una funcion en javascript con la palabra reservada 'function' continuado del nombre de la función
// y esta puede o no tener parámetros. Para este caso no es necesario hacer uso de parámetros ya que obtendremos
// los valores a partir de document.getElementById(IdDeMiElementoHTML="message").value;
// eslint-disable-next-line no-unused-vars
function encode(offset, message) {
  
  offset = parseInt(offset);
  let result= "";
  const upperLetter = message.toUpperCase();
  // aqui voy a recorrer cada uno de los caracteres de mi mensaje
  // y por cada uno voy a obtener su valor en ASCII
  for (let i=0; i < upperLetter.length; i++) {
    const messageAscii = upperLetter.charCodeAt(i);
    const newText = (((messageAscii - 65 + offset) % 26) + 65);
    result += String.fromCharCode(newText);
  }
  //imprimimos en consola e interfaz para ver el resultado
  return result;
}

//Función para descifrar
// eslint-disable-next-line no-unused-vars
function decode(offset, message) {
  
  offset = parseInt(offset);
  let result= "";
  const upperLetter = message.toUpperCase();
  for (let i=0; i < upperLetter.length; i++) {
    const messageAscii = upperLetter.charCodeAt(i);
    let newText = (((messageAscii - 65 - offset) % 26) + 65);
    if (newText < 65 ) {
      newText= (((messageAscii - 65 - offset) % 26) + 65 + 26);
    }
    
    result += String.fromCharCode(newText);
    return result;
  }

}
// const cipher= {
//   let encryptMessage= document.getElementById("message").addEventListener("click", function(){ 
//  })
//       
//  
//  }
//}

// export default cipher;
export default {encode, decode};