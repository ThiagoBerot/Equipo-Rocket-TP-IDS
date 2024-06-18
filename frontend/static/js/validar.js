const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const raza = document.getElementById("raza");
const latitud = document.getElementById("latitud");
const longitud = document.getElementById("longitud");
const email = document.getElementById("mail");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    if (!validarNombre(nombre.value)) {
        alert("Por favor ingresa un nombre válido (solo letras).");
        return;
    }
    
    if (!validarRaza(raza.value)) {
        alert("Por favor ingresa una raza válida (solo letras).");
        return;
    }

    if (!validarCoordenada(latitud.value)) {
        alert("Por favor ingresa una latitud válida (solo números).");
        return;
    }

    if (!validarCoordenada(longitud.value)) {
        alert("Por favor ingresa una longitud válida (solo números).");
        return;
    }

    if (!validarEmail(email.value)) {
        alert("Por favor ingresa un correo electrónico válido. (ej: armani@gmail.com");
        return;
    }

    form.submit();
});

function validarNombre(nombre) {
    return /^[a-zA-Z]+$/.test(nombre);
}

function validarRaza(raza) {
    return /^[a-zA-Z]+$/.test(raza);
}

function validarCoordenada(coordenada) {
    return /^[0-9]+$/.test(coordenada);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}