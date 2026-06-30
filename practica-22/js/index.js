let resultado = document.querySelector('.resultado');

function calcular() {
    let precio = Number(document.querySelector('#precio').value);
    let descuento = Number(document.querySelector('#descuento').value);

    if (precio === 0 || descuento === 0) {
        resultado.innerText = "Por favor ingresá ambos valores.";
        return;
    }

    let precioFinal = precio - (precio * descuento / 100);
    resultado.innerText = "El precio a pagar es de: $" + precioFinal;
}

/*Declaración de uso de IA: Le pedí que revise cálculos, identifique errores y sugiera mejoras, con el contexto
de la cursada de esta materia. Me sugirió que chequee que los campos no estén vacíos, lo cual tomé, y que redondee
los resultados a dos decimales, lo cuál descarté, porque no vimos la función toFixed().*/