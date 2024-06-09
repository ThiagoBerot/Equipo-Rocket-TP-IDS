//let map;
//let coord;
let markers = [];
/*-----------------------------------------------------------------------------------*/
function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 10,
    center: coord
  });
  //dibujarMarcador(map, coord, markers);
  //addPanToMarker(map, markers);
}
/*-----------------------------------------------------------------------------------*/
//Dibuja una marcador
function dibujarMarcador(map, coord, markers){
let marker = new google.maps.Marker({
    position: coord,
    map: map
  });
  markers.push(marker);
}
/*--------------------------------------------------------------------------------------- */
//Agrega evento a marcador
function addPanToMarker(map, markers) {
    markers.map(marker => {
      marker.addListener('click', event => {
          alert("Hola mundo");
      });
    });
}
/*-------------------------------------------------------------------------------------- */
/*Funcion que BUSCA el marker correcto segun el filtro,
le va a preguntar a la base los datos seleccionados para
que le pida a otra base las coordenadas de la descripcion.*/
//Busca un marcador
function seleccionarColor(){
  let filtroColor = document.getElementById('filtroColor');
  let color = filtroColor.value;
  document.getElementById('idColor').innerText = `Ud. ha seleccionado el color ${color}`;
}

function seleccionarRaza(){
  let filtroRaza = document.getElementById('filtroRaza');
  let raza = filtroRaza.value;
  document.getElementById('idRaza').innerText = `Ud. ha seleccionado la raza ${raza}`;
}

function seleccionarEdad(){
  let filtroEdad = document.getElementById('filtroEdad');
  let edad = filtroEdad.value;
  document.getElementById('idEdad').innerText = `Ud. ha seleccionado la edad ${edad}`;
}

function seleccionarFecha(){
  let filtroFecha = document.getElementById('filtroFecha');
  let fecha = filtroFecha.value;
  document.getElementById('idFecha').innerText = `Ud. ha seleccionado la raza ${fecha}`;
}
/*--------------------------------------------------------------------------------- */
/*Funcion que AGREGA el marker correcto segun el registro,
va a agregar a la base los datos ingresados para
poder mostrarlos en el mapa en las coordenadas correctas.*/

//Agrega un marcador

/*-------------------------------------------------------------------------------*/
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
