#!/bin/bash

sudo apt install gnome-terminal
sudo apt-get install python3-pip
pip3 install pipenv

#Creación entorno virtual con las dependencias necesarias.
pipenv install -r requirements.txt

#Levantar contenedor y levantarse a la base de datos
# Cambiar al directorio adecuado
cd front+back/backend/API/docker

# Iniciar los contenedores Docker con docker-compose
sudo docker-compose up --build -d

# Otros comandos que quieras ejecutar dentro del entorno virtual
# sudo docker exec -it docker-db-1 mysql -u root -p
# use mascotas;

# Volver al directorio principal
cd ../../../

# Activar el entorno virtual
pipenv shell