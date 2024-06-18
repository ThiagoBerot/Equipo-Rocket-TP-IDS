#Dependencias

#Dependencias necesarias para conectar a mysql.
pip3 install flask_sqlalchemy
pip3 install mysql-connector-python

#Dependecias para interactuar javascript con la api 
sudo apt install npm
npm install node-fetch

#Levantar contenedor y levantarse a la base de datos 
cd docker
sudo docker-compose up --build -d
sudo docker exec -it docker-db-1 mysql -u root -p
use mascotas;