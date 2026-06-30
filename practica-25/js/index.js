let recomendacion = document.querySelector('.recomendacion');
let bienvenida = document.querySelector('.bienvenida');

function recomendar() {
    let nombre = document.querySelector('#nombre').value;
    let edad = Number(document.querySelector("#edad").value);
    let genero = document.querySelector("#genero").value;
    bienvenida.innerText = '¡Bienvenidx ' + nombre + '!'; 
    if (edad < 13) {
        switch(genero) {
            case "acción":
            recomendacion.innerText = "Te recomiendo 'Las Chicas Superpoderosas'.";
            break;
            case "cFiccion":
            recomendacion.innerText = "Te recomiendo 'Invasor Zim'.";
            break;
            case "fantasia":
            recomendacion.innerText = "Te recomiendo 'Little Witch Academia'.";
            break;
            case "romance":
            recomendacion.innerText = "Te recomiendo 'Pucca'.";
            break;
            case "comedia":
            recomendacion.innerText = "Te recomiendo 'Bob Esponja'.";
            break;
            case "terror":
            recomendacion.innerText = "Te recomiendo 'Coraje el Perro Cobarde'.";
            break;
        }
    } else if (edad >=13 && edad <18) {
        switch(genero) {
            case "acción":
            recomendacion.innerText = "Te recomiendo 'Avatar la Leyenda de Aang'.";
            break;
            case "cFiccion":
            recomendacion.innerText = "Te recomiendo 'Steven Universe.";
            break;
            case "fantasia":
            recomendacion.innerText = "Te recomiendo 'Fionna y Cake'.";
            break;
            case "romance":
            recomendacion.innerText = "Te recomiendo 'Kaguya Sama'.";
            break;
            case "comedia":
            recomendacion.innerText = "Te recomiendo 'Hora de Aventura'.";
            break;
            case "terror":
            recomendacion.innerText = "Te recomiendo 'Attack on Titan'.";
            break;
        }
    } else {
        switch(genero) {
            case "acción":
            recomendacion.innerText = "Te recomiendo 'Mr. & Mrs. Smith'.";
            break;
            case "cFiccion":
            recomendacion.innerText = "Te recomiendo 'Star Trek TNG'.";
            break;
            case "fantasia":
            recomendacion.innerText = "Te recomiendo 'El caballero de los Siete Reinos'.";
            break;
            case "romance":
            recomendacion.innerText = "Te recomiendo 'Fleabag'.";
            break;
            case "comedia":
            recomendacion.innerText = "Te recomiendo 'Community'.";
            break;
            case "terror":
            recomendacion.innerText = "Te recomiendo 'The Haunting of Hill House'.";
            break;
        }
    }
}