let nombre;

alert('Bienvenidx a la web de Cafetería Alien');

let respuesta = confirm('¿Deseás personalizar la bienvenida?');

if (respuesta) {
    nombre = prompt('Escribí tu nombre','acá');
    let titulo = document.querySelector('header');
    titulo.innerText = '¡Bienvenidx ' + nombre + '!';    
}

let respuesta2 = confirm('¿Querés leer las instrucciones en Dark Mode?');

if (respuesta2) {
    let cuerpo = document.querySelector('body');
    cuerpo.style.backgroundColor = 'black';
    cuerpo.style.color = 'white';
}

let respuesta3 = prompt('Escribí la hora:','hora:minutos');

let hora = Number(respuesta3[0] + respuesta3[1]);

let minutos = Number(respuesta3[3] + respuesta3[4]);

let despedida = document.querySelector('.despedida');

if (hora > 5 && hora <= 12) {
    despedida.innerText = '¡Buenos días!';
} else if (hora > 12 && hora < 19) {
    despedida.innerText = '¡Buenas tardes!';
} else {
    despedida.innerText = '¡Buenas noches!';
}