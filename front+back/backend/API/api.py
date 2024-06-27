import mysql.connector
from flask import Flask, jsonify,request
from sqlalchemy.exc import SQLAlchemyError
import datetime
from flask_cors import CORS, cross_origin


#--------------------------------------------------------------------------------------------
app = Flask(__name__)

CORS(app)
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
@cross_origin
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
            'tipo':row[2],
            'sexo':row[3],          
            'edad':row[4],
            'raza':row[5],
            'color':row[6],
            'tamanio':row[7],
            'mail':row[8],
            'descripcion':row[9],
            'fecha_desaparicion':row[10],
            'fecha_encontrado':row[11]
            }
            data.append(diccionario)
    return jsonify(data), 200


@app.route('/mascotas/<id>', methods=['GET'])
def obtener_mascota(id):
    query = f"""Select * FROM mascotas WHERE id={id};"""
    try:
        cursor.execute(query)
        resultado = cursor.fetchall()
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    except:
        return jsonify({'message':'Se ha producido un error'}),404
    if resultado != 0:
        data = []
        for row in resultado:
            diccionario = {
            'id':row[0],
            'nombre':row[1],
            'tipo':row[2],
            'sexo':row[3],          
            'edad':row[4],
            'raza':row[5],
            'color':row[6],
            'tamanio':row[7],
            'mail':row[8],
            'descripcion':row[9],
            'fecha_desaparicion':row[10],
            'fecha_encontrado':row[11]
            }
            data.append(diccionario)
        return jsonify(data), 200
    #return jsonify({'message':'La mascota no existe'}), 404


@app.route('/mascotas', methods=['POST'])
def agregar_mascotas():
    nueva_mascota = request.get_json()
    
    query = f"""INSERT INTO mascotas(nombre, tipo, sexo, edad, raza, color, tamanio, mail, descripcion, fecha_desaparicion, fecha_encontrado)
                VALUES ('{nueva_mascota["nombre"]}', '{nueva_mascota["tipo"]}', '{nueva_mascota["sexo"]}', '{nueva_mascota["edad"]}', '{nueva_mascota["raza"]}',
                        '{nueva_mascota["color"]}', '{nueva_mascota["tamanio"]}', '{nueva_mascota["mail"]}', '{nueva_mascota["descripcion"]}', 
                        '{nueva_mascota["fecha_desaparicion"]}', {'NULL'});"""
    try:
        cursor.execute(query)
        connection.commit()
        return jsonify({'message': 'Se ha agregado correctamente'}), 200
    
    except SQLAlchemyError as err:
        return jsonify({'message': 'Se ha producido un error en la base de datos ' + str(err)}), 500
    
    except Exception as e:
        return jsonify({'message': 'Se ha producido un error ' + str(e)}), 500



@app.route('/mascotas/<id>', methods=['PATCH'])
def modificar_mascota(id):
    modificar_mascota = request.get_json()
    query = f"""UPDATE mascotas SET nombre='{modificar_mascota['nombre']}' 
    {f", fecha_encontrado = '{modificar_mascota['fecha_encontrado']}' " if "fecha_encontrado" in 
    modificar_mascota else ""} WHERE id={id}; """
    #query_validacion = f"Select * FROM mascotas WHERE id={id}"
    try:
        cursor.execute(query)
        connection.commit()
        #validacion = cursor.execute(query_validacion)
        #resultado = cursor.fetchall()
        #if resultado != 0:   
            #cursor.execute(query)
            #connection.commit()
        #else:
            #return jsonify({'message':'La mascota no existe'}), 404
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    except:
        return jsonify({'message':'Se ha producido un error'}), 404
    return jsonify({'message':'Se ha modificado correctamente ' + query}), 200


@app.route('/mascotas/<id>', methods=['DELETE'])
def borrar_mascota(id):
    query = f"DELETE FROM mascotas WHERE id={id};"
    #query_validacion = f"Select * FROM mascotas WHERE id={id};"
    try:
        cursor.execute(query)
        connection.commit()
        #validacion = cursor.execute(query_validacion)
        #resultado = cursor.fetchall()
        #if resultado != 0:   
            #cursor.execute(query)
            #connection.commit()
        #else:
            #return jsonify({'message':'La mascota no existe'}), 404
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    return jsonify({'message':'Se ha eliminado correctamente'}), 200


#--------------------------------------------------------------------------------------------
@cross_origin
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
            'nombre':row[1],
            'direccion':row[2],
            'latitud':row[3],
            'longitud':row[4],
            'especie':row[5]
            }
            print(diccionario)
            data.append(diccionario)
    return jsonify(data), 200


@app.route('/coordenadas/<id>', methods=['GET'])
def obtener_coordenada(id):
    query = f"""Select * FROM coordenadas WHERE id={id};"""
    try:
        cursor.execute(query)
        resultado = cursor.fetchall()
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    except:
        return jsonify({'message':'Se ha producido un error'}),404
    if resultado != 0:
        data = []
        for row in resultado:
            diccionario = {
            'id':row[0],
            'nombre':row[1],
            'direccion':row[2],
            'latitud':row[3],
            'longitud':row[4]
            }
            print(diccionario)
            data.append(diccionario)
        return jsonify(data), 200
    #return jsonify({'message':'La mascota no existe'}), 404


@app.route('/coordenadas', methods=['POST'])
def agregar_coordenadas():
    nueva_coordenada = request.get_json()
    query = f"""INSERT INTO coordenadas (nombre,direccion,latitud,longitud)
        VALUES ('{nueva_coordenada["nombre"]}','{nueva_coordenada["direccion"]}',
        '{nueva_coordenada["latitud"]}','{nueva_coordenada["longitud"]}');"""
    try: 
        cursor.execute(query)
        connection.commit()
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    except:
        return jsonify({'message':'Se ha producido un error'}),404
    return jsonify({'message':'Se ha agregado correctamente ' + query}), 200


@app.route('/coordenadas/<id>', methods=['PATCH'])
def modificar_coordenada(id):
    modificar_coordenada = request.get_json()
    query = f"""UPDATE coordenadas SET nombre='{modificar_coordenada['nombre']}', 
    {f"direccion = '{modificar_coordenada['direccion']}' " if "direccion" in 
    modificar_coordenada else ""}, latitud='{modificar_coordenada['latitud']}',
    longitud='{modificar_coordenada['longitud']}'
    WHERE id={id}; """
    try:
        cursor.execute(query)
        connection.commit()
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    except:
        return jsonify({'message':'Se ha producido un error'}),404
    return jsonify({'message':'Se ha modificado correctamente ' + query}), 200


@app.route('/coordenadas/<id>', methods=['DELETE'])
def borrar_coordenada(id):
    query = f"DELETE FROM coordenadas WHERE id={id};"
    try:
        cursor.execute(query)
        connection.commit()
     
    except SQLAlchemyError as err:
       return jsonify({'message':'Se ha producido un error ' + str(err.__cause__)})
    return jsonify({'message':'Se ha eliminado correctamente'}), 200


#--------------------------------------------------------------------------------------------
if __name__ == '__main__':
   app.run("127.0.0.1",debug=True, port=5001)





