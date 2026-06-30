let resultado1 = document.querySelector('.resultado1');
let resultado2 = document.querySelector('.resultado2');
let resultado3 = document.querySelector('.resultado3');


function calcular1() {
    let au001 = Number(document.querySelector('#au001').value);
    let au101 = Number(document.querySelector('#au101').value);
    let au201 = Number(document.querySelector('#au201').value);
    let au301 = Number(document.querySelector('#au301').value);
    let au501 = Number(document.querySelector('#au501').value);
    let mayor = au001;
    let aula = "001"
    if (au101 > mayor) {
        mayor = au101;
        aula = "101"
    }
    if (au201 > mayor) {
        mayor = au201;
        aula = "201"
    }
    if (au301 > mayor) {
        mayor = au301;
        aula = "301"
    }
    if (au501 > mayor) {
        mayor = au501;
        aula = "501"
    }
    resultado1.innerText = "El aula con más pupitres es la " + aula + " con un total de " + mayor + " pupitres.";
}

function calcular2() {
    let au001 = Number(document.querySelector('#au001').value);
    let au101 = Number(document.querySelector('#au101').value);
    let au201 = Number(document.querySelector('#au201').value);
    let au301 = Number(document.querySelector('#au301').value);
    let au501 = Number(document.querySelector('#au501').value);
    let menor = au001;
    let aula = "001"
    if (au101 < menor) {
        menor = au101;
        aula = "101"
    }
    if (au201 < menor) {
        menor = au201;
        aula = "201"
    }
    if (au301 < menor) {
        menor = au301;
        aula = "301"
    }
    if (au501 < menor) {
        menor = au501;
        aula = "501"
    }
    resultado2.innerText = "El aula con menos pupitres es la " + aula + " con un total de " + menor + " pupitres.";
}

function calcular3() {
    let au001 = Number(document.querySelector('#au001').value);
    let au101 = Number(document.querySelector('#au101').value);
    let au201 = Number(document.querySelector('#au201').value);
    let au301 = Number(document.querySelector('#au301').value);
    let au501 = Number(document.querySelector('#au501').value);
    let aComprar = 0;
    if (au001 < 80) {
        aComprar+= 80 - au001;
    }
    if (au101 < 80) {
        aComprar+= 80 - au101;
    }
    if (au201 < 80) {
        aComprar+= 80 - au201;
    }
    if (au301 < 80) {
        aComprar+= 80 - au301;
    }
    if (au501 < 80) {
        aComprar+= 80 - au501;
    }
   resultado3.innerText = "Para que cada aula tenga mínimo 80 falta comprar " + aComprar + " pupitres.";
}