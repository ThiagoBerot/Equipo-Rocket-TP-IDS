/*const options = {
  method: 'GET',
  host: '127.0.0.1:5001'
}*/
// pip install flask-cors

/*----------------------------------------------------------------------------------------* */

function crearMascota(map,coord,especie){
  let marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: cargarIcono(especie)
  });
}

//Muestra los refugios de la vista "¿Perdiste una mascota?" como marcadores en el mapa
function mostrarRefugios(map){
  let refugios = {
    'refugio1': {lat: -34.58387452491165, lng :-58.406567244141655},
    'refugio2': {lat: -34.60302588670758, lng:  -58.4084567788676},
    'refugio3': {lat: -34.61663306715347, lng: -58.38580257957804},
    'refugio4': {lat: -34.56753902849066, lng: -58.43550243629815}
    };
  

  for(let key in refugios){
    let marker = new google.maps.Marker({
      position: refugios[key],
      map: map,
      icon: {
        url: '/static/img_map/icono-refugio.png',
        size: new google.maps.Size(90, 90)
      }
    });
  
  }
}

//Función de prueba para ventana de información al tocar los marcadores del mapa
function mostrarInfoMarcadores(map){
  let coord = new google.maps.Marker({
    position: {lat: -34.58387452491165, lng :-58.406567244141655},
    map: map
  });
  
  let contentString = 'TEXTO DE PRUEBA';

  let infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  coord.addListener('click', function() {
    infoWindow.open(map, coord);
  });
}

function conseguirCoordenadas(map){
  let url = "http://127.0.0.1:5001/coordenadas"
  fetch(url)
    .then(response => response.json())
    .then(data => mostrarMascotas(data,map))
    .catch(error => console.log(error))
  }

const mostrarMascotas = (data,map) => {
  console.log(data)
  let longitud = data.length;

  for(let i=0; i < longitud; i++){
    let coord =  { lat: parseFloat(data[i]['latitud']), lng: parseFloat(data[i]['longitud'])};
    let especie = data[i]['especie']

    crearMascota(map,coord,especie)
  }
} 

/*----------------------------------------------------------------------------------------*/

function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 12,
    center: coord
  });
  dibujaUnCirculo(map, coord);
  conseguirCoordenadas(map);
  mostrarRefugios(map);
  mostrarInfoMarcadores(map);
}                                                                                                                                                     

/*--------------------------------------------------------------------------------------*/
//Dibuja un circulo
function dibujaUnCirculo(map, coord) {
  const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    map: map,
    center: coord,
    radius: 8000
  }
  const circle = new google.maps.Circle(circleOptions);
  return circle;
}
/*---------------------------------------------------------------------------------------*/
//Carga el icono segun la especie
function cargarIcono(especie){
  let imagen;
  if(especie == 'perro'){
    imagen = {
    url: '/static/img_map/perro.png',
    size: new google.maps.Size(100, 100)
    }
  }
  else{
    imagen = {
    url: '/static/img_map/gato.png',
    size: new google.maps.Size(100,100)
    } 
  }
  return imagen;
}
/*---------------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------------- */
/*Funcion que BUSCA el marker correcto segun el filtro,
le va a preguntar a la base los datos seleccionados para
que le pida a otra base las coordenadas de la descripcion.*/
//Busca un marcador

let filtro = []


function filtrarAnimal(filtro){
  document.getElementById('idFiltrarAnimal').innerText = `Ud. ha seleccionado la descripcion ${filtro[0]}, ${filtro[1]}, ${filtro[2]}, ${filtro[3]}, ${filtro[4]}, ${filtro[5]}`;
  
  let url = "http://127.0.0.1:5001/mascotas"
  fetch(url)
    .then(response => response.json())
    .then(data => filtrarMascota(data,filtro))
    .catch(error => console.log(error))
}

function filtrarMascota(data,filtro){

  console.log(data)

  let contador = 0;
  let listaCoincidencias = []
  let longitud = data.length

  for(let i=0; i < longitud; i++){

    if((filtro[0] == data[i]["tipo"]) && (filtro[1] == data[i]["sexo"]) && (filtro[2] == data[i]["color"]) && (filtro[3] == data[i]["raza"]) && (filtro[4] == data[i]["edad"])){
      contador++;
      listaCoincidencias.push(data[i]["nombre"])
      //document.getElementById('idCoincidencia').innerText = `Se encontro a ${data[i]["nombre"]}, encontrado en la fecha ${data[i]["fecha_desaparicion"]}`
    }
    //document.getElementById('idCoincidencia').innerText = `No se encontro una mascota con esa descripcion, lo sentimos mucho.`;
  }

  if(contador == 0){
    document.getElementById('idCoincidencia').innerText = `No se encontro una mascota con esa descripcion, lo sentimos mucho.`;
  }else{
    
  }


}

function seleccionarTipo(){
  let filtroColor = document.getElementById('filtroTipo');
  let tipo = filtroTipo.value;
  filtro.push(tipo)
}

function seleccionarSexo(){
  let filtroColor = document.getElementById('filtroSexo');
  let sexo = filtroSexo.value;
  filtro.push(sexo)
}

function seleccionarColor(){
  let filtroColor = document.getElementById('filtroColor');
  let color = filtroColor.value;
  filtro.push(color)
}

function seleccionarRaza(){
  let filtroRaza = document.getElementById('filtroRaza');
  let raza = filtroRaza.value;
  filtro.push(raza)
}

function seleccionarEdad(){
  let filtroEdad = document.getElementById('filtroEdad');
  let edad = filtroEdad.value;
  filtro.push(edad)
}

function seleccionarFecha(){
  let filtroFecha = document.getElementById('filtroFecha');
  let fecha = filtroFecha.value;
  filtro.push(fecha)
  

  filtrarAnimal(filtro)
}



  
/*-----------------------------------------------------------------------------------*/

//Agrega evento a marcador
/*function addPanToMarker(map,markers) {
    markers.map(marker => {
      marker.addListener('click', event => {
          alert("Hola mundo");
      });
    });
}*/

//Recibe datos desde el formulario
/*const boton_encontraste_mastcota = document.getElementById("boton-formulario")
boton_encontraste_mastcota.addEventListener("click", function(event){
  let latitud = $("#latitud").val()
  let longitud = $("#longitud").val()
  
  // function enviarDatos(latitud,longitud);
})*/
