import mysql.connector
from flask import Flask, jsonify, redirect, render_template, url_for, request
from sqlalchemy import create_engine,text
from sqlalchemy.exc import SQLAlchemyError
#--------------------------------------------------------------------------------------------
app = Flask(__name__)
#--------------------------------------------------------------------------------------------
#Conectamos la base de datos con python
connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='mascotas',
    database='mascotas',
    port='3307'
)
cursor = connection.cursor()
#--------------------------------------------------------------------------------------------
@app.route('/mascotas', methods=['GET'])
def obtener_mascotas():
    query = "Select * FROM mascotas;"
    try:
        cursor.execute(query)
        resultado = cursor.fetchall()
    except SQLAlchemyError as err:
       return print(str(err.__cause__))
    if resultado != 0:
        data = []
        for row in resultado:
            diccionario = {
            'id':row[0],
            'nombre':row[1],
            'edad':row[2],
            'raza':row[3],
            'color':row[4],
            'fecha_desaparicion':row[5],
            'fecha_encontrado':row[6]
            }
            data.append(diccionario)
    return jsonify(data), 200


@app.route('/agregar_mascota', methods=["POST"])
def agregar_mascotas():
    nueva_mascota = request.get_json()
    query = f"""INSERT INTO mascotas (nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
            VALUES '{nueva_mascota["nombre"]}','{nueva_mascota["edad"]}','{nueva_mascota["raza"]}',
            '{nueva_mascota["color"]}','{nueva_mascota["fecha_desaparicion"]}','{nueva_mascota["fecha_encontrado"]}';"""
    try:
        cursor.execute(query)
        resultado = cursor.fetchall()
        resultado.commit()

    except SQLAlchemyError as err:
       return jsonify({'message': 'Se ha produjido un error ' + str(err.__cause__)})
    #except:
        #return jsonify({'message': 'Se ha produjido un error'})
    return jsonify({'message':'Se ha agregado correctamente ' + query}), 200


#--------------------------------------------------------------------------------------------
@app.route('/coordenadas', methods=['GET'])
def obtener_coordenadas():
    query = "Select * FROM coordenadas;"
    try: 
        cursor.execute(query)
        resultado = cursor.fetchall()
    except SQLAlchemyError as err:
       return print(str(err.__cause__))
    if resultado != 0:
        data = []
        for row in resultado:
            diccionario = {
            'id':row[0],
            'direccion':row[1],
            'nombre':row[2],
            'latitud':row[3],
            'longitud':row[4]
            }
            data.append(diccionario)
    return jsonify(data), 200


#--------------------------------------------------------------------------------------------
if __name__ == '__main__':
   app.run("127.0.0.1",debug=True, port=5001)





