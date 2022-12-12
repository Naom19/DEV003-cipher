import cipher from './cipher.js';

function domEncode() {
  const messageToEncrypt = document.getElementById("message").value; //aqui guardamos el string de message
  const offset = parseInt(document.getElementById("offset").value); //llamamos offset y definimos que sólo sean numeros enteros
  const messageEncrypted = cipher.encode(offset, messageToEncrypt);
  document.getElementById("message").value = messageEncrypted;
}

function domDecode() {
  const messageToDecrypt = document.getElementById("message").value;
  const offset = parseInt(document.getElementById("offset").value);
  const messageDecrypted = cipher.decode(offset, messageToDecrypt);
  document.getElementById("message").value = messageDecrypted; 
}

//colocamos después de las funciones los eventos que ocurrirán cuando la persona usuaria seleccione los botones
const encryptButton = document.getElementById("encrypt");
encryptButton.addEventListener("click", domEncode); 

const decryptButton = document.getElementById("decrypt");
decryptButton.addEventListener("click", domDecode);




