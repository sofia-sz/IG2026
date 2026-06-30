let imagen = document.querySelector('.imagen');

function tirar() {
    let numero = Math.floor((Math.random()*6) + 1);
    imagen.src = "./img/" + numero + ".png";
}