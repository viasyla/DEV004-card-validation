import validator from './validator.js';



console.log('validador'+validator);

const cardNumber = document.getElementById('cardNumber');
console.log('cardNumber LN5 : '+cardNumber);
const boton = document.getElementById('btn');


//Validacion de ingreso sin letras.
cardNumber.addEventListener('input', event => {
  //Obteniendo posicion del cursor
  const val = event.target.value;//Valor de la caja de texto
  let out = '';//Salida
  const filtro = '1234567890';
  //var v = 0;//Contador de caracteres validos

  //Filtar solo los numeros
  for (let i = 0; i < val.length; i++) {
    if (filtro.indexOf(val.charAt(i)) !== -1) {
      // v++;
      out += val.charAt(i);
    }
  }
  //Reemplazando el valor
  event.target.value = out;
  //console.log('valor de even'+event.target.value);//me mustra los valores ingresados
});


boton.addEventListener('click', () => {
   
  const result = document.getElementById('result');
  const valueNumber = cardNumber.value;
  //const valid = isValid(document.getElementById("cardnumber"))
  console.log('dentro del boton');

  if (valueNumber === '') {
    // Show success in div#result
    result.innerText = "Tarjeta Vacia, complete."
    //return
  } else {
    const valid = validator.isValid(valueNumber);
    const masca = validator.maskify(valueNumber);
    if (valid) {
      // Show success in div#result
      result.innerHTML = "La Tarjeta "+masca+' es valida.'
    }
    else {
      // Show error message in div#result
      result.innerHTML = "La Tarjeta "+masca+ ' es Invalida, Vuelve a intentarlo.';//valueNumber
    }
    cardNumber.value="";
    
    //console.log(masca);//maskify(masca);
  }
})

// function maskify(){
//     const cardNumber=document.getElementById('cardNumber').value;
//     const mascara=validator.maskify(cardNumber);
//     console.log('mascara index.js : '+mascara);
//     document.getElementById('cardNumber').value=mascara;
//     //return mascara;
//   }






