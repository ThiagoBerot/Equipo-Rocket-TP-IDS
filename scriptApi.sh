#!bin/bash
gnome-terminal
cd backend
cd API
pipenv shell 
export FLASK_DEBUG=1
gnome-terminal
python3 api.py
echo "Corriendo api.py en el puerto 5001"