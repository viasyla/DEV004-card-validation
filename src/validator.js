


const validator = {
  // ...
  isValid: function (creditCardNumber) {
    // is creditCardNumber valid?
    // const cardNumber = document.getElementById('cardNumber').value; //llamo el valor de cardNumber

    //console.log(card);

    const arreglo = creditCardNumber.split("").map(Number);
    console.log('LN-84 arreglo inicial : ' + arreglo);

    const arregloReverse = arreglo.reverse()
    console.log('LN-86 reversa del arreglo : ' + arregloReverse);

    let suma = 0;

    for (let i = 0; i < arregloReverse.length; i++) {
      const posicion = i + 1;
      console.log('LN-92 arregloReverse ' + [i] + ' :' + arregloReverse[i]);


      if (posicion % 2 === 0) {
        arregloReverse[i] = arregloReverse[i] * 2;
        // console.log('LN-97 arregloReverse' + [i] + ' * 2 : ', arregloReverse[i]);

      }
      if (arregloReverse[i] > 9) {
        //console.log('LN-101 : ' + arregloReverse[i]);
        const num = arregloReverse[i].toString().split('').map(Number);
        arregloReverse[i] = num[0] + num[1]

      }
      suma += arregloReverse[i];
      //console.log('suma : '+suma);
    }
    //console.log('suma : '+suma);
    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }


  },
  //aqui se coloca el maskify
  maskify: function (cardNumber) {
    
    const cardNumberString = cardNumber.split("");//.reverse();
    const arrayfill=cardNumberString.fill('#', 0 ,cardNumberString.length - 4);
    console.log(arrayfill);
    return arrayfill.join("");
 
  // //const numeros= cardNumberString.slice(0, -4).replace(/[a-zA-Z]/g, '#').concat(cardNumberString.slice(-4, cardNumberString.len));
  // const numeros=cardNumberString.slice(0, -4).replace(/[0-9a-zA-Z]/g, '#').concat(cardNumberString.slice(-4, cardNumberString.len));
  // console.log('numeros : ' + numeros);
  // //.slice(0, -4).replace(/[0-9a-zA-Z]/g, '#').concat(cardNumberString.slice(-4, cardNumberString.len))
  // return numeros;
  },
};

export default validator;
