const cipher = {
  encrypt: function(offset, message) {
    console.log('entre funcion cipher')
    let result= "";
    offset= parseInt(offset);
    let upperLetter =message.toUpperCase();

    for (let i=0; i < upperLetter.lenght; i++) {
      let messageAscci= upperLetter.charCodeAt(i);
      let newText= ((messageAscci - 65 + offset) %26) + 65;
      result += String.fromCharCode(newText);
    }
    return result;
  }
  // ...

};

export default cipher;
