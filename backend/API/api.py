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




