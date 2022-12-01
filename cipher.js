//Comentarios en JS

// declaramos una funcion en javascript con la palabra reservada 'function' continuado del nombre de la función
// y esta puede o no tener parámetros. Para este caso no es necesario hacer uso de parámetros ya que obtendremos
// los valores a partir de 'document.getElementById(IdDeMiElementoHTML).value
function cipher() {
  // guardando en la variable message el valor del elemento message, en este caso será el mensaje a cifrar
  const message = document.getElementById("message").value;
  // guardando en la variable offset el valor del elemento offset, este nos ayudara a determinar cuantos
  // caracteres se van a recorrer en nuestro cifrado
  let offset = document.getElementById("offset").value;
  // como el valor obtenido no es de tipo numerico, tenemos que transformarlo utilizando la función
  // parsetInt()
  offset = parseInt(offset);
  let result= "";
  let upperLetter = message.toUpperCase();
  // aqui voy a recorrer cada uno de los caracteres de mi mensaje
  // y por cada uno voy a obtener su valor en ASCII
  for (let i=0; i < upperLetter.length; i++) {
    let messageAscii = upperLetter.charCodeAt(0);
    console.log('messageAscii: ' + messageAscii);
    let newText = ((messageAscii - 65 + offset) % 26) + 65;
    console.log('newText: ' + newText);
    result += String.fromCharCode(newText);
  }
  //imprimimos en consola el mensaje ya encriptado
  console.log(result);

}


// const cipher= {
//   let encryptMessage= document.getElementById("message").addEventListener("click", function(){ 
//  alert("Encrypting...Encriptando..."")
//  })
//       
//  
//  }
//}

// export default cipher;
