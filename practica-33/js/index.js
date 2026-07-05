let enviar = document.querySelector('#enviar');
let resultados = document.querySelector('#resultados');
let corredores = [];
let respuesta = document.querySelector('.respuesta');
let ganador = {
    nombre:'',
    apellido:'',
    edad:'',
    numero:'',
    tiempo: Infinity
};
let cantidad = 0;
let sumaTiempos = 0;

enviar.addEventListener('click', function() {
    let corredor = {};
    let valido1 = false;
    let valido2 = false;
    let valido3 = false;
    let valido4 = false;
    let valido5 = false;

    while (!valido1) {
        corredor.nombre = document.querySelector('#nombre').value;
        if (!isNaN(corredor.nombre)) {
            alert('Por favor, escribí un nombre válido');
        } else {
            valido1 = true;
        }
    }

    while (!valido2) {
        corredor.apellido = document.querySelector('#apellido').value;
        if (!isNaN(corredor.apellido)) {
            alert('Por favor, escribí un apellido válido');
        } else {
            valido2 = true;
        }
    }

    while (!valido3) {
        corredor.edad = Number(document.querySelector('#edad').value);
        if (isNaN(corredor.edad) || corredor.edad <= 0) {
            alert('Por favor, escribí una edad válida');
        } else {
            valido3 = true;
        }
    }

    while (!valido4) {
        corredor.numero = Number(document.querySelector('#numero').value);
        if (isNaN(corredor.numero) || corredor.numero < 0) {
            alert('Por favor, escribí un número válido');
        } else {
            valido4 = true;
        }
    }

    while (!valido5) {
        corredor.tiempo = Number(document.querySelector('#tiempo').value);
        if (isNaN(corredor.tiempo) || corredor.numero <= 0) {
            alert('Por favor, escribí un tiempo válido');
        } else {
            valido5 = true;
        }
    }
    if (valido1 && valido2 && valido3 && valido4 && valido5) {
        corredores.push(corredor);
        if (corredor.tiempo < ganador.tiempo) {
            ganador = corredor;
        }
        cantidad++;
        sumaTiempos+= corredor.tiempo;
    }
});

resultados.addEventListener('click', function() {
    let rapidos = 0;
    for (let i = 0; i < cantidad; i++) {
        if (corredores[i].tiempo < (sumaTiempos/cantidad)) {
            rapidos++;
        }
    }
    respuesta.innerText = "El ganador fue " + ganador.nombre + ' ' + ganador.apellido + ' de ' + ganador.edad + ` años,
     de número ` + ganador.numero + ' y con un tiempo de ' + ganador.tiempo + ` segundos.  \n
     El promedio de tiempo fue de ` + Math.round(sumaTiempos/cantidad) + 'segundos y ' + Math.round(rapidos*100/cantidad) + `% de corredores
    fueron más rápidos que el promedio.`
});