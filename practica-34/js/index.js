let obras = [
    { src: "./img/1.jpg", titulo: "Cuadro Histórico" },
    { src: "./img/2.jpg", titulo: "La tormenta en el mar de Galilea" },
    { src: "./img/3.jpg", titulo: "El molino" },
    { src: "./img/4.jpg", titulo: "Flora" },
    { src: "./img/5.jpg", titulo: "La ronda de noche" },
    { src: "./img/6.jpg", titulo: "Cristo en la cruz" },
    { src: "./img/7.jpg", titulo: "Diana bañandose con sus ninfas" },
    { src: "./img/8.jpg", titulo: "El cegamiento de Sanson" },
    { src: "./img/9.jpg", titulo: "El hombre del casco dorado" },
    { src: "./img/10.jpg", titulo: "El angel abandonando a Tobias y su familia" }
];

let cantidad = 5;
let contenedor = document.querySelector(".imagenes");
let boton = document.querySelector("#mostrarMas");

function mostrarImagenes() {

    contenedor.innerHTML = '';
    let obrasAMostrar = obras.slice(0, cantidad);
 
    for (let i = 0; i < obrasAMostrar.length; i++) {
        contenedor.innerHTML = contenedor.innerHTML
            + "<div>"
            + "<img src='" + obrasAMostrar[i].src + "' width='200'>"
            + "<p>" + obrasAMostrar[i].titulo + "</p>";
            + "</div>";
    }
}

boton.addEventListener("click", function () {
    cantidad += 5;
    mostrarImagenes();
});

mostrarImagenes();