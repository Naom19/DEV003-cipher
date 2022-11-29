const cipher = {

  cipher.encode(offset, message) {
    console.log('entre funcion cipher')
    let result= "";
    offset= parseInt(offset);
    let upperLetter =message.toUpperCase();

    for (let i=0; i < upperLetter.lenght; i++) {
      let messageAscii= upperLetter.charCodeAt(i);
      let newText= ((messageAscii - 65 + offset) %26) + 65;
      result += String.fromCharCode(newText);
    }
    return result;
  }
  // ...

};

export default cipher;
