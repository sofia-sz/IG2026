let fondo = document.querySelector('body');
fondo.addEventListener('click', function() {
    fondo.style.backgroundColor = 'pink';
})

let titulo = document.querySelector('h1');
titulo.addEventListener('click', function() {
    titulo.style.color = 'red';
});

let subtitulo = document.querySelector('h2');
subtitulo.addEventListener('click', function() {
    subtitulo.style.color = 'red';
});

let parrafos = document.querySelectorAll('p');
parrafos[0].addEventListener('click', function() {
    parrafos[0].style.color = 'red';
    parrafos[0].style.backgroundColor = 'darkred';
});
parrafos[1].addEventListener('click', function() {
    parrafos[1].style.color = 'red';
    parrafos[1].style.backgroundColor = 'darkred';
});

let lista = document.querySelectorAll('u li');
lista[0].addEventListener('click', function() {
    lista[0].style.color = 'darkred';
    lista[0].style.backgroundColor = 'red';
    lista[1].style.color = 'darkred';
    lista[1].style.backgroundColor = 'red';
})
lista[1].addEventListener('click', function() {
    lista[0].style.color = 'darkred';
    lista[0].style.backgroundColor = 'red';
    lista[1].style.color = 'darkred';
    lista[1].style.backgroundColor = 'red';
})

let imagen = document.querySelector('img');
imagen.addEventListener('click', function() {
    imagen.remove(imagen);
});