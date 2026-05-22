let linkActivo = document.querySelector('a[href="microcentro.html"]');
linkActivo.style.backgroundColor = '#FFE8BE';
linkActivo.style.color = 'rgb(255, 252, 240)';

let imagen = document.querySelector('img');
imagen.addEventListener('mouseover', function() {
    imagen.style.width = '120%';
});
imagen.addEventListener('mouseout', function() {
    imagen.style.width = '100%';
});

//Declaracion de uso de IA: utilicé IA para que me sugiera posibles interacciones con la página.