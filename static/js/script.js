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
