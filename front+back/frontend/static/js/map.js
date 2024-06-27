/*const options = {
  method: 'GET',
  host: '127.0.0.1:5001'
}*/
// pip install flask-cors

/* ---------------------------- FUNCIONES DEL MAPA -------------------------------- */

//Muestra los refugios de la vista "¿Perdiste una mascota?" como marcadores en el mapa, al clickearlos aparece una ventana con su nombre
function mostrarRefugios(map){
  let refugios = {
    'refugio1': {lat: -34.58387452491165, lng :-58.406567244141655, nombre: 'Mascotas en adopción Argentina', direccion: '2494 Av.Cnel Díaz, Cdad. Autónoma de Buenos Aires', telefono: '+54 11 1234-5678', email: 'contacto_MEAP@gmail.com'},
    'refugio2': {lat: -34.60302588670758, lng:  -58.4084567788676, nombre: 'Refugio el gran Pirincho', direccion: 'Lavalle 3000, C1088 Cdad. Autónoma de Buenos Aires', telefono: '+54 11 8765-4321', email: 'info_elgranpirincho@hotmail.com'},
    'refugio3': {lat: -34.61663306715347, lng: -58.38580257957804, nombre: 'Hogar de protección Lourdes', direccion: 'Chile 1393, C1098 Buenos Aires', telefono: '+54 11 4717-3124', email: 'hogarlourdes@gmail.com'},
    'refugio4': {lat: -34.56753902849066, lng: -58.43550243629815, nombre: 'Refugio Amor Animal', direccion: 'Av. Jorge Newbery 1761, C1426 Cdad. Autónoma de Buenos Aires', telefono: '+54 11 9876-5432', email: 'amoranimal@gmail.com'}
    };
  

  for(let key in refugios){
    let marker = new google.maps.Marker({
      position: {lat: refugios[key].lat, lng: refugios[key].lng},
      map: map,
      icon: {
        url: '/static/img_map/icono-refugio.png',
        size: new google.maps.Size(90, 90),
      },
    });
    
    let infoRefugio = `
    <div>
      <h2>${refugios[key].nombre}🐾</h2>
      <p>Dirección: ${refugios[key].direccion}</p>
      <p>Número de contacto: ${refugios[key].telefono}</p>
      <p>Email: ${refugios[key].email}</p>
    </div>
    `
    ;
    
    let infoWindow = new google.maps.InfoWindow({
      content: infoRefugio
    });
    
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

  }
}

//Obtiene las coordenadas y la información de las mascotas desde la API para luego procesarlas en la función mostrarTodasLasMascotas()
function conseguirCoordenadas(map){
  let urlCoordenadas = "http://127.0.0.1:5001/coordenadas";
  let urlMascotas = "http://127.0.0.1:5001/mascotas";

  fetch(urlCoordenadas)
    .then(response => response.json())
    .then(dataCoordenadas => {
      fetch(urlMascotas)
        .then(response => response.json())
        .then(dataMascotas => {
          mostrarTodasLasMascotas(dataCoordenadas, dataMascotas, map);
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
}

/* Itera cada elemento del Json de las coordenadas para matchear su id con la de la mascota correspondiente. 
Arma el par ordenado de su ubicación y obtiene la especie de la mascota para mandarla 
a la función crearMascontaConInfo */
const mostrarTodasLasMascotas = (dataCoordenadas, dataMascotas, map) => {
  dataCoordenadas.forEach(coordMascota => {
    let mascota = dataMascotas.find(m => m.id === coordMascota.id);
    if (mascota) {
      let coord = { lat: parseFloat(coordMascota.latitud), lng: parseFloat(coordMascota.longitud) };
      let especie = coordMascota.especie;
      crearMascotaConInfo(map, coord, especie, mascota);
    }
  });
}

/* Crea marcadores en el mapa con las coordenadas donde se perdieron las mascotas.
Carga el icono correspondiente a su especie con la función cargarIcono()
y utiliza la información de la mascota para que al clickear el marcador aparezca una ventana con sus datos */
function crearMascotaConInfo(map, coord, especie, mascota){
  let marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: cargarIcono(especie)
  });

  let infoMascota = `
    <div class="informacion">
      <h2>${mascota.nombre}</h2>
      <p>Raza: ${mascota.raza}</p>
      <p>Edad: ${mascota.edad}</p>
      <p>Tamaño: ${mascota.tamanio}</p>
      <p>Color: ${mascota.color}</p>
      <p>Descripción: ${mascota.descripcion}</p>
      <p>Fecha de desaparición: ${new Date(mascota.fecha_desaparicion).toLocaleDateString()}</p>
      <p>Contacto: ${mascota.mail}</p>
      <br>

      <form>
        <label>Si usted ya encontró a esta mascota, presione el siguiente botón. Lo borraremos de la base de datos:</label>
        <button onclick="eliminarMascota(${mascota.id})">¡Encontré a mi mascota!</button>
      </form>
    </div>
  `;

  let infoWindow = new google.maps.InfoWindow({
    content: infoMascota
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}

//Borra la mascota con el id pasado por parametro de la base de datos con el método DELETE, si el usuario confirma la acción
function eliminarMascota(id){
  let resultado = window.confirm('¿Estás seguro/a? Esta acción es irreversible.')
  if (resultado == true){
    let urlMascotas = `http://127.0.0.1:5001/mascotas/${id}`;
    fetch(urlMascotas, {
      method: 'DELETE'
    })
    .then(response => response.json())
  }

}

/* Inicia el mapa centrado en la zona de CABA.
Se ayuda de las funciones dibujaUnCirculo(), conseguirCoordenadas() y mostrarRefugios() */
function iniciarMap() {
  let coord = { lat: -34.5956145, lng: -58.4431949 };
  let map = new google.maps.Map(document.getElementById("Mapa"), {
    zoom: 12,
    center: coord
  });
  dibujaUnCirculo(map, coord);
  conseguirCoordenadas(map);
  mostrarRefugios(map);
}
                                                                                                                                                 
//Dibuja un circulo alrededor de la zona de CABA.
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

//Carga el ícono del marcador de la mascota segun su especie (perro o gato)
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

/* -------------------------------------------------------------------------------- */


/* ---------------------------- FUNCIONES DEL FILTRO -------------------------------- */

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

/* ---------------------------------------------------------------------------------- */

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
