/* 1 Falta hacer funcion que envia datos a bd cuando envia el formulario, 
 * 2 la que recibe los datos cuando inicia el mapa para levantarlos en el mapa,
 * 3 y la que filtra los datos y hae zoom a un marccador en especifico.
 */

const base_datos_coordenadas = [{ lat: -34.5956145, lng: -58.4431949 }, { lat: -34.60342, lng: -58.38525 }];

const base_datos_formulario = 
  [{'id':1,'animal':'perro','edad':'adulto','raza':'labrador','color':'negro',
    'tamanio':'grande','sexo':'macho','mail':'rsmartin@fi.uba.ar','descripcion':'inquieto',
    'fecha_encuentro':'13/07/2024'}, {'id':2,'animal':'gato','edad':'cachorro','raza':'siames','color':'blanco',
    'tamanio':'chico','sexo':'hembra','mail':'rsmartin@fi.uba.ar','descripcion':'inquieto',
    'fecha_encuentro':'12/07/2024'}];
/*-----------------------------------------------------------------------------------*/
function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 10,
    center: coord
  });
  //Cada vez que se inicia el mapa tiene que consultar una base de datos para que
  //le traiga todas las coordenadas y levantarlas en el mapa
  //function recibirDatos(latitud,longitud);
  dibujarTodosLosMarcadores(map);
}
/*---------------------------------------------------------------------------------------*/
const boton_encontraste_mastcota = document.getElementById("boton-formulario")
boton_encontraste_mastcota.addEventListener("click", function(event){
  let latitud = $("#latitud").val()
  let longitud = $("#longitud").val()
  alert(longitud);
  // function enviarDatos(latitud,longitud);
})

/*---------------------------------------------------------------------------------------*/
function cargarIcono(especie){
  let imagen;
  if(especie == 'perro'){
    imagen = {
    url: '/static/img_map/perro.jpeg',
    size: new google.maps.Size(20, 32)
    }
  }
  else{
    imagen = {
    url: '/static/img_map/gato.png',
    size: new google.maps.Size(20, 32)
    } 
  }
  return imagen;
}
/*---------------------------------------------------------------------------------------*/
//Dibuja una marcador
function dibujarMarcador(map,coord,especie){
  let marker = new google.maps.Marker({
      position: coord,
      map: map,
      //icon: cargarIcono(especie)
    });
  }
/*---------------------------------------------------------------------------------------*/
function dibujarTodosLosMarcadores(map){
  let longitud_base_coordenadas = base_datos_coordenadas.length;
  for(let i=0; i < longitud_base_coordenadas; i++){
  let coord = base_datos_coordenadas[i];
  let especie = base_datos_formulario[i]['animal'];
  
    dibujarMarcador(map,coord,especie);
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