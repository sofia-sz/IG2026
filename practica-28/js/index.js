let informe = document.querySelector('.informe');
let enviar = document.querySelector('#enviar');
let totalPasta = 0;
let totalPollo = 0;
let totalEnsalada = 0;

alert('Vamos a organizar una cena para 12. Uno a uno, elijan su plato de preferencia.');
alert('Invitado 1:');
let invitado = 1;

enviar.addEventListener('click', function() {
    let cena = document.querySelector('#cena').value;
    if (invitado <= 12) {
        if (cena == 'pasta') {
            totalPasta++;
        } else if (cena == 'pollo') {
            totalPollo ++;
        } else {
            totalEnsalada ++;
        }
        alert('Invitado ' + invitado + ':');
        invitado++;
    } else {
        let masElegido;
        if (totalPasta >= totalPollo && totalPasta >= totalEnsalada) {
            masElegido = 'pasta';
        } else if (totalPollo >= totalPasta && totalPollo >= totalEnsalada) {
            masElegido = 'pollo';
        } else {
            masElegido = 'ensalada';
        }
        informe.innerText = 'El ' + Math.round(totalPasta*100/12) + '% quiere pasta. \n El ' + Math.round(totalPollo*100/12) + '% quiere pollo. \n El ' + Math.round(totalEnsalada*100/12) + '% quiere ensalada. \n El menú más elegido es el de ' + masElegido + '.';
    }
});