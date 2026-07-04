let apuesta, total;
let aciertos = document.querySelector('.aciertos');
let apostar = document.querySelector('#apostar');
let tirar = document.querySelector('#tirar');

apostar.addEventListener('click', function() {
    for (let i = 1; i<=5; i++) {
        let imagen = document.querySelector('.imagen'+i);
        imagen.src = "";
        imagen.style.border = 'none';
    }
    aciertos.innerText = '';
    let valido = false;
    let valor;
    while (!valido) {
        valor = prompt('¿Por qué número apostás?', '(1 al 6)');
        if (valor == 1 || valor == 2 || valor == 3 || valor == 4 || valor == 5 || valor == 6) {
            valido = true;
        } else {
            alert('Por favor, ingresá un número válido');
        }
    }
    apuesta = Number(valor);
    total = 0;
});

tirar.addEventListener('click', function() {
    for (let i = 1; i<=5; i++) {
        let imagen = document.querySelector('.imagen'+i);
        let numero = Math.floor((Math.random()*6) + 1);
        if (numero == apuesta) {
            total++;
            imagen.style.border = "2px solid gold";
        }
        imagen.src = "./img/" + numero + ".png";
    }
    aciertos.innerText = "En total " + total + ' dados coinciden con tu apuesta.';
});