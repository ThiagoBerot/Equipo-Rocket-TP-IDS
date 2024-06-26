let url = "http://127.0.0.1:5001/mascotas"
    fetch(url)
      .then(response => response.json())
      .then(data => mostrarData(data))
      .catch(error => console.log(error))
    

const mostrarData = (data) => {
    console.log(data)
    let mascota = ""
    let longitud = data.length;
    for(let i=0; i < longitud; i++){
        mascota+= "<div class='grillaTarjeta'>" +
        "<img class='grillaImagen' src='static/img/perdido"+i+".jpeg' />" +
        "<div class='grillaInfo'>"+
        "<h3>Nombre: " + data[i]['nombre'] + "</h3><h3>Raza: " + data[i]['raza'] +
        "</h3><h3>Color: " + data[i]['color'] +
        "</h3><h3>Edad: " + data[i]['edad'] +
        "</h3><h3>Fecha de desaparición: " + data[i]['fecha_desaparicion'] + 
        "</h3>" +
        "</div>"+
      "</div>"
    }
    document.getElementById("mascotas").innerHTML = mascota
}
   
   
    /*let i = 0
    let longitud = data.length;
    let nombre = ""
    let raza = ""
    let color = ""
    let edad = ""
    let fecha_desa = ""
     //for(let i=0; i < longitud; i++){
          //let coord =  { lat: parseFloat(data[i]['latitud']), lng: parseFloat(data[i]['longitud'])};
    nombre = data[i]['nombre']
    raza = data[i]['raza']
    color = data[i]['color']
    edad = data[i]['edad']
    fecha_desa = data[i]['fecha_desaparicion']
    document.getElementById("nombre").innerHTML = nombre
    document.getElementById("raza").innerHTML = raza
    document.getElementById("color").innerHTML = color
    document.getElementById("edad").innerHTML = edad
    document.getElementById("fecha_desa").innerHTML = fecha_desa
    document.getElementById("data") = data
    */


    /*mascota += "<h3>Nombre:</h3>" + data[numero]['nombre'] + "<h3>Raza:</h3>" + data[numero]['raza'] +
    "<h3>Color:</h3>" + data[numero]['color'] +
    "<h3>Edad:</h3>" + data[numero]['edad'] +
    "<h3>Fecha de desaparición:</h3>" + data[numero]['fecha_desaparicion'] + "</h3>"
    document.getElementById("data").innerHTML = mascota
    */

/*
document.getElementById("nombre").innerHTML = nombre
document.getElementById("raza").innerHTML = raza
document.getElementById("color").innerHTML = color
document.getElementById("edad").innerHTML = edad
document.getElementById("fecha_desa").innerHTML = fecha_desa
*/