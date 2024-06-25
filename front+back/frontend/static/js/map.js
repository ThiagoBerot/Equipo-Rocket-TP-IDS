/*const options = {
  method: 'GET',
  host: '127.0.0.1:5001'
}*/
// pip install flask-cors

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

    let marker = new google.maps.Marker({
      position: coord,
      map: map,
      icon: cargarIcono(especie)
    });
  }
}



/*----------------------------------------------------------------------------------*/
function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 12,
    center: coord
  });

  dibujaUnCirculo(map, coord);
  conseguirCoordenadas(map);
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

//Agrega evento a marcador
/*function addPanToMarker(map, markers) {
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
