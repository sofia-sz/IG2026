let informe = document.querySelector('.informe');
let calcular = document.querySelector('#calcular');

calcular.addEventListener('click', function() {
    let libros = Number(document.querySelector('#libros').value);

    if (isNaN(libros) || libros <= 0) {
        alert('Por favor, ingrese un número válido y vuelva a calcular');

    } else {
        let total = 0;
        let masCaro = -1;
        let masBarato = Infinity;
        let promedio = 0;

        for (let i = 0; i < libros; i++) {
            let precioValido = false;
            while (!precioValido) {
                let precio = Number(prompt('Ingrese el precio del libro número ' + (i + 1) + ':'));
                if (isNaN(precio) || precio <= 0) {
                    alert('Precio inválido, intente de nuevo');
                } else {
                    precioValido = true;
                    if (precio > masCaro) {
                        masCaro = precio;
                    }
                    if (precio < masBarato) {
                        masBarato = precio;
                    }
                    total += precio;
                }
            }
        }
        promedio = total/libros;
        informe.innerText = `Informe sobre su compra de libros: \n
        Total Gastado: $` + total + `\n
        El libro más caro costó: $` + masCaro + `\n
        El libro más barato costó: $` + masBarato + `\n
        El promedio de precio es de: $` + promedio;
    }
});