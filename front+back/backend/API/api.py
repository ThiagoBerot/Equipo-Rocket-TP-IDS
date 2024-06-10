import mysql.connector
from flask import Flask, jsonify, redirect, render_template, url_for, request
from sqlalchemy import create_engine,text
from sqlalchemy.exc import SQLAlchemyError
#--------------------------------------------------------------------------------------------
#app = Flask(__name__)
#--------------------------------------------------------------------------------------------
#Conectamos la base de datos con python
connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='mascotas',
    database='mascotas',
    port='3304'
)
cursor = connection.cursor()
'''cursor.execute('Select * FROM mascotas')
mascotas = cursor.fetchall()
connection.close()
print(mascotas)'''



#--------------------------------------------------------------------------------------------
#@app.route('/mascotas', methods=['GET'])
def obtener_mascotas():
    query = "Select * FROM mascotas;"
   
    try:
        cursor.execute(query)
        resultado = cursor.fetchall()
        
    except SQLAlchemyError as err:
       print(str(err.__cause__))
    
    if resultado != 0:
        print(resultado[0])
     #   data = []
      #  for row in resultado:
       #     diccionario = {
        #        'id': row[0],
                #'nombre': row[1],
                #'edad': row[2],
                #'raza': row[3],
                #'color': row[4],
                #'fecha_desaparicion': row[5],
                #'fecha_encontrado': row[6]
            #}
            #data.append(diccionario)
        #return jsonify(data),200
    #return jsonify({"message":"El usuario no existe"}), 404

obtener_mascotas()
#--------------------------------------------------------------------------------------------
#if __name__ == '__main__':
 #   app.run("127.0.0.1",debug=True, port=5001)
#// 
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
    #nombre                = request.form['nombre']
    tipo                  = request.form['tipo']
    edad                  = request.form['edad']
    raza                  = request.form['raza']
    color                 = request.form['color']
    tamanio               = request.form['tamanio']
    sexo                  = request.form['sexo']
    zona                  = request.form['zona']
    mail                  = request.form['mail']
    descripcion           = request.form['descripcion']
    mail                  = request.form['mail']
    #fecha_desaparicion    = request.form['fecha_desaparicion']
    fecha_encontrado    = request.form['fecha_encontrado']
    query= f"""INSERT INTO perdido(nombre, tipo, edad, raza, color, tamanio, sexo, zona, mail, descripcion) VALUES ('lizi','{request.form["tipo"]}','{request.form["edad"]}', '{request.form["raza"]}', '{request.form["color"]}','{request.form["tamanio"]}','{request.form["sexo"]}','{request.form["zona"]}', '{request.form["fecha_encontrado"]}', '{request.form["fecha_encontrado"]}')"""  
    result.execute(text(query))
    conn.commit() #"confirmar" cambios a la base
    conn.close() #cerrando conexion SQL
    result.close() #cerrando conexion de la base 
    return render_template('formulario_enviado.html'),200



