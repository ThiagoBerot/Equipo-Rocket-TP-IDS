//Menú hamburguesa para el responsive
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navegadorMenu = document.querySelector(".navegadorMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navegadorMenu.classList.toggle("active");
    });

    document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navegadorMenu.classList.remove("active");
    }));
});

function mostrarContenido(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.content section');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar solo la sección seleccionada
    var seccionMostrar = document.getElementById(id);
    seccionMostrar.style.display = 'block';
}
//Slider
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

setInterval(function () {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}
//Acordeon Preguntas Frecuentes
$('.Lista li .Pregunta').click(function () {
    $(this).find('.Signo').toggleClass('Mas');
    $(this).parent().toggleClass('active');
});





