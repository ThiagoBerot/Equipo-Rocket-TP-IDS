
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
#--------------------------------------------------------------------------------------------
@app.route('/coordenadas', methods=['GET'])
def obtener_coordenadas():
    query = "Select * FROM ubicacion;"
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
            'latitud':row[1],
            'longitud':row[2]
            }
            data.append(diccionario)
    return jsonify(data), 200
#--------------------------------------------------------------------------------------------
if __name__ == '__main__':
   app.run("127.0.0.1",debug=True, port=5001)



'''
from flask import Flask, render_template, url_for, redirect, request
from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
app = Flask(__name__)
def set_connection():
    #funcion que conecta a la base de datos
    engine = create_engine("mysql+mysqlconnector://user1:lizi12@localhost/mascota")
    connection = engine.connect()

    return connection

@app.route('/form', methods=['POST'])
def registrarForm():
    conn = set_connection()
    result = conn
    nombre                = request.form['nombre']
    tipo                  = request.form['tipo']
    edad                  = request.form['edad']
    raza                  = request.form['raza']
    color                 = request.form['color']
    tamanio               = request.form['tamanio']
    sexo                  = request.form['sexo']
    latitud               = request.form['latitud']
    longitud              = request.form['longitud']
    mail                  = request.form['mail']
    descripcion           = request.form['descripcion']
    fecha_encontrado    = request.form['fecha_encontrado']#fecha en la que la mascota se encontro en la via publica
    query= f"""INSERT INTO perdido(nombre, tipo, edad, raza, color, tamanio, sexo, latitud, longitud, mail, descripcion) VALUES ('{request.form["nombre"]}','{request.form["tipo"]}','{request.form["edad"]}', '{request.form["raza"]}', '{request.form["color"]}','{request.form["tamanio"]}','{request.form["sexo"]}','{request.form["latitud"]}', '{request.form["longitud"]}', '{request.form["fecha_encontrado"]}')"""  
    result.execute(text(query))
    conn.commit() #"confirmar" cambios a la base
    conn.close() #cerrando conexion SQL
    result.close() #cerrando conexion de la base 
    return render_template('formulario_enviado.html'),200
@app.route('/mascotas',methods=["GET"])
def mostrar_mascotas():
    conn=set_connection()
    data=[]
    query="SELECT * FROM perdido;"
    try:
        result= conn.execute(text(query))
    except SQLAlchemyError as err:
        print("error",err.__cause__)
    for row in result:
        dicc = {}
        dicc['nombre'] = row.nombre
        dicc['tipo'] = row.nombre
        dicc['edad'] = row.nombre
        dicc['raza'] = row.nombre
        dicc['color'] = row.nombre
        dicc['tamanio'] = row.nombre
        dicc['sexo'] = row.nombre
        dicc['latitud'] = row.nombre
        dicc['longitud'] = row.nombre
        dicc['mail'] = row.nombre
        dicc['descripcion'] = row.nombre
        dicc['fecha_encontrado'] = row.nombre
        data.append(dicc)
    return jsonify(data),200
    

'''

