#Creación entorno virtual con las dependencias necesarias.
mkdir .venv
pipenv install -r requirements.txt

#Dependencias necesarias para conectar a mysql desde flask con xampp.
#pip3 install flask_sqlalchemy
#pip3 install mysql-connector-python

#Levantar contenedor y levantarse a la base de datos
cd front+back/backend/API/docker
sudo docker-compose up --build -d
#sudo docker exec -it docker-db-1 mysql -u root -p
#use mascotas;