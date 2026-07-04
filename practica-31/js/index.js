let clientes = 0;
let montos = 0;
let masGastoNombre = '';
let masGastoNum = -1;
let envio = document.querySelector('#enviar');
let calculo = document.querySelector('#calcular');
let descuento = document.querySelector('#aplicar');
let resCalc = document.querySelector('.calculo');
let resDesc = document.querySelector('.descuento');

envio.addEventListener('click', function() {
    let monto = Number(document.querySelector('#monto').value);
    let cliente = document.querySelector('#nombre').value;
    if (monto > masGastoNum) {
        masGastoNum = monto;
        masGastoNombre = cliente;
    }
    clientes++;
    montos+=monto;
    document.querySelector('#nombre').value = '';
    document.querySelector('#monto').value = '';
});

calculo.addEventListener('click', function() {
    let promedio = montos/clientes;
    resCalc.innerText = 'La cantidad total de clientes es de ' + clientes + ' y el promedio de compra es de ' + promedio + '.';
});

descuento.addEventListener('click', function() {
    let res;
    let desc;
    if (masGastoNum > 50000) {
        desc = 30;
        res = masGastoNum - masGastoNum*0.3;
    } else {
        desc = 15;
        res = masGastoNum - masGastoNum*0.15;
    }
    resDesc.innerText = 'El cliente que más gastó es ' + masGastoNombre + '. Se le aplicó un descuento del ' + desc + '% y su monto ahora es de ' + res + '.';
});
