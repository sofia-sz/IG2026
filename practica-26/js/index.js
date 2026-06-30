let presupuesto = document.querySelector('.presupuesto');

function calcular() {
    let proyectores = Number(document.querySelector('#proyectores').value);
    let computadoras = Number(document.querySelector('#computadoras').value);
    let pantallas = Number(document.querySelector('#pantallas').value);
    let dias = Number(document.querySelector('#dias').value);
    let total = (45000*proyectores + 50000*computadoras + 35000*pantallas)*dias;
    if (total > 500000) {
        total -= total * 0.1;
    }
    presupuesto.innerText = 'El presupuesto es de $' + total + '.'; 
}

/*Declaración de uso de IA: Le pedí que revise cálculos, identifique errores y sugiera mejoras, considerando mi contexto de cursada. Lo único que 
me corrigió fue un error en el que multipliqué 50000 por las pantallas en lugar de por las computadoras. No hubo más sugerencias. */
