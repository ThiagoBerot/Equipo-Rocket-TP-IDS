
#  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-----------BACKEND --------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #

from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy  import create_engine 
from sqlalchemy import text 
from sqlalchemy.exc import SQLAlchemyError


#-------------------------------------------------------------------------------------------------------------
app = Flask(__name__)
engine = create_engine("mysql+mysqlconnector://root@localhost/encontraste_una_mascota")

#--------------------------------------------------------------------------------------------------------------
@app.route('/users', methods=['GET'])
def users():
    conn = engine.connect()  
    query = 'SELECT * FROM users;'
    try:
        #se debe usar text para adecuarla al al execute de mysql-connector
        result = conn.execute(text(query))
        conn.commit()
        conn.close()
    except SQLAlchemyError as err:
        return jsonify(str(err.__cause__))
    #se preparan los datos para ser mostrados como json
    data = []
    for row in result:
        entity = {}
        entity['id'] = row.id
        entity['name'] = row.name
        entity['email'] = row.email
        entity['ceated_at'] = row.create_at
        data.append(entity)
    conn.close()   
    return jsonify(data), 200
    
#-------------------------------------------------------------------------------------------------
@app.route("/create_user", methods=['POST'])
def create_user():
    conn = engine.connect()
    new_user = request.get_json()
    #se crea la query en base a los datos pasados por el endpoin
    #los mismos deben viajar por el body en formato json
    query = f"""INSERT INTO users (name,email) VALUES '{new_user["name"]}', '{new_user["email"]}';"""
    try:
        result = conn.execute(text(query))
        conn.commit()
        conn.close()
    except SQLAlchemyError as err:
        print("Error", err.__cause__)
    except:
        print("Error")
    return jsonify({'messaje':'Se ha agregado correctamente ' + query }), 201

#----------------------------------------------------------------------------------------------------------
@app.route('/users/<id>', methods=['PATCH'])
def update_user(id):
    conn = engine.connect()
    mod_user = request.get_json()
    #de la misma manera que con el metodo post los datos deberan
    #ser enviados por el body
    query = f"""UPDATE users SET name = '{mod_user["name"]}',
        email = '{mod_user["email"]}' if email in mod_user else WHERE id = {id};"""
    query_validation = f"SELECT * FROM users WHERE id = {id};"
    try:
        val_result = conn.execute(text(query_validation))
        if val_result.rowcount != 0:
            result = conn.execute(text(query))
            conn.commit()
            conn.close()
        else:
            conn.close()
            return jsonify({'message':"El usario no existe"}), 404
    except SQLAlchemyError as err:
        jsonify({'message':str(err.__cause__)})
    return jsonify({'message':'SE ha modificado correctamente ' + query}), 200

#-------------------------------------------------------------------------------------------------------------------
@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    conn = engine.connect()
    query = f"""SELECT * FROM users WHERE id = {id};"""
    try:
        result = conn.execute(text(query))
        conn.commit()
        conn.close()
    except SQLAlchemyError as err:
        return jsonify(str(err.__cause__))

    if result.rowcount != 0:
        row = result.first()
        data = {}
        data['id'] = row[0]
        data['name'] = row[1]
        data['email'] = row[2]
        data['create_at'] = row[3]
        return jsonify(data), 200
    return jsonify({'message':'El usuario no existe'}, 404)

#------------------------------------------------------------------------------------------------------
@app.route('/users/<id>', methods=['DELETE'])
def delete(id):
    conn = engine.connect()
    query = f"""DELETE FROM users WHERE id = {id};"""
    query_validation = f"SELECT * FROM users WHERE id = {id};"
    try:
        val_result = conn.execute(text(query_validation))
        if val_result.rowcount != 0:
            result = conn.execute(text(query))
            conn.commit()
            conn.close()
        else:
            conn.close()
            return jsonify({'message':"El usario no existe"}), 404
    except SQLAlchemyError as err:
        return jsonify(str(err.__cause__))
    return jsonify({'message':'Se ha eliminado correctamente ' + query}), 200

#------------------------------------------------------------------------------------------------
if __name__ == '__main__':
    app.run('127.0.0.1',port='8080',debug=True)

