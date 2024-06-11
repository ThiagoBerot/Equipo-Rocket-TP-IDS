
/* 1 Falta hacer funcion que envia datos a bd cuando envia el formulario, 
 * 2 la que recibe los datos cuando inicia el mapa para levantarlos en el mapa,
 * 3 y la que filtra los datos y hae zoom a un marccador en especifico.
 */

const base_de_datos = [{ lat: -34.5956145, lng: -58.4431949 }];

/*-----------------------------------------------------------------------------------*/
function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 10,
    center: coord
  });
  //Cada vez que se inicia el mapa tiene que consultar una base de datos para que
  //le traiga todas las coordenadas y levantarlas en el mapa
  dibujarTodosLosMarcadores(map);
}
/*---------------------------------------------------------------------------------------*/
const boton_encontraste_mastcota = document.getElementById("boton-formulario")
boton_encontraste_mastcota.addEventListener("click", function(event){
  let latitud = $("#lat").val()
  let longitud = $("#long").val()
  // funtion enviarDatos(latitud,longitud);
})
/*---------------------------------------------------------------------------------------*/
//Dibuja una marcador
function dibujarMarcador(map, coord){
  let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
/*---------------------------------------------------------------------------------------*/
function dibujarTodosLosMarcadores(map){
  console.log(base_de_datos.length);
  for(let i=0; i < base_de_datos.length; i++){

  let coord = base_de_datos[i];

    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
    dibujarMarcador(map,coord);
  }
}
/*-------------------------------------------------------------------------------------- */
/*Funcion que BUSCA el marker correcto segun el filtro,
le va a preguntar a la base los datos seleccionados para
que le pida a otra base las coordenadas de la descripcion.*/
//Busca un marcador
/*function seleccionarColor(){
  let filtroColor = document.getElementById('filtroColor');
  let color = filtroColor.value;
  document.getElementById('idColor').innerText = `Ud. ha seleccionado el color ${color}`;
}*/

/*function seleccionarRaza(){
  let filtroRaza = document.getElementById('filtroRaza');
  let raza = filtroRaza.value;
  document.getElementById('idRaza').innerText = `Ud. ha seleccionado la raza ${raza}`;
}*/

/*function seleccionarEdad(){
  let filtroEdad = document.getElementById('filtroEdad');
  let edad = filtroEdad.value;
  document.getElementById('idEdad').innerText = `Ud. ha seleccionado la edad ${edad}`;
}*/

/*function seleccionarFecha(){
  let filtroFecha = document.getElementById('filtroFecha');
  let fecha = filtroFecha.value;
  document.getElementById('idFecha').innerText = `Ud. ha seleccionado la raza ${fecha}`;
}*/

  
/*-----------------------------------------------------------------------------------*/
//Dibuja un circulo
/*function drawCircle(map, coord) {
  const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    map: map,
    center: coord,
    radius: 800
  }
  const circle = new google.maps.Circle(circleOptions);
  return circle;
}*/

/*----------------------------------------------------------------------------------*/
//Agrega evento a marcador
/*function addPanToMarker(map, markers) {
    markers.map(marker => {
      marker.addListener('click', event => {
          alert("Hola mundo");
      });
    });
}*/
