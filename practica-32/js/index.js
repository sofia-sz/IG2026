let numero;
let enviar = document.querySelector('#enviar');
let respuesta = document.querySelector('.respuesta');
let intentos = 0;

window.addEventListener('load', function() {
    numero = Math.floor((Math.random()*100) + 1);
    document.querySelector('#numero').value = '';
});

enviar.addEventListener('click', function() {
    let adivinanza = Number(document.querySelector('#numero').value);
    intentos++;
    if (intentos < 11) {
        if (numero > adivinanza) {
            respuesta.innerText = "Ingrese un número mayor. Te quedan " + (10-intentos) + ' intentos.';
        } else if (numero < adivinanza) {
            respuesta.innerText = "Ingrese un número menor. Te quedan " + (10-intentos) + ' intentos.';
        } else {
            respuesta.innerText = "Adivinaste! El número era " + numero + '. Para jugar de nuevo actualizá la página.';
        }
    } else {
        respuesta.innerText = "Perdiste! El número era " + numero + '. Para jugar de nuevo actualizá la página.';
    }
});

