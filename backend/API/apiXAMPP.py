from flask import Flask, jsonify, request
from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError

app = Flask(__name__)
engine = create_engine("mysql+mysqlconnector://root:mascotas@localhost/mascotas")

def set_connection():
    # Conectar a la base de datos
    connection = engine.connect()
    return connection

@app.route('/api/mascotas', methods=['GET'])
def obtener_mascotas():
    conn = set_connection()
    query = "SELECT * FROM mascotas"
    try:
        result = conn.execute(text(query))
        data = []
        for row in result:
            entity = {
                'id': row[0],  
                'nombre': row[1],  
                'edad': row[2],  
                'raza': row[3],  
                'color': row[4],  
                'fecha_desaparicion': row[5],  
                'fecha_encontrado': row[6]  
            }
            data.append(entity)
        return jsonify(data), 200 
    except SQLAlchemyError as err:
        return jsonify(str(err.__cause__)), 500
    finally:
        conn.close()

@app.route('/api/mascotas', methods=['POST'])
def agregar_mascota():
    conn = set_connection()
    data = request.get_json()
    new_mascota = request.get_json()

    if 'fecha_encontrado' not in new_mascota or new_mascota['fecha_encontrado'] is None:
        query = f"""INSERT INTO mascotas (nombre, raza, edad, color, fecha_desaparicion, fecha_encontrado) 
                    VALUES ('{new_mascota["nombre"]}', '{new_mascota["raza"]}', 
                    '{new_mascota["edad"]}', '{new_mascota["color"]}', 
                    '{new_mascota["fecha_desaparicion"]}', NULL);"""
    else:
        query = f"""INSERT INTO mascotas (nombre, raza, edad, color, fecha_desaparicion, fecha_encontrado) 
                    VALUES ('{new_mascota["nombre"]}', '{new_mascota["raza"]}', 
                    '{new_mascota["edad"]}', '{new_mascota["color"]}', 
                    '{new_mascota["fecha_desaparicion"]}', '{new_mascota["fecha_encontrado"]}');"""

    try:
        conn.execute(text(query))
        conn.commit()
        return jsonify('Mascota agregada'), 201
    except SQLAlchemyError as err:
        return jsonify(str(err.__cause__)), 500
    finally:
        conn.close()


@app.route('/api/mascotas/<int:id>', methods=['DELETE'])
def eliminar_mascota(id):
    conn = set_connection()
    query = f"""DELETE FROM mascotas WHERE id = {id};"""
    validation_query = f"SELECT * FROM mascotas WHERE id = {id}"
    try:
        val_result = conn.execute(text(validation_query))
        if val_result.rowcount != 0:
            result = conn.execute(text(query))
            conn.commit()
            conn.close()
        else:
            conn.close()
            return jsonify({"message": "La mascota no existe"}), 404
    except SQLAlchemyError as err:
        jsonify(str(err.__cause__))
    return jsonify({'message': 'Se elimino la mascota'}), 202

if __name__ == '__main__':
    app.run(debug=True, port=5001)