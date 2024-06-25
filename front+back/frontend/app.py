from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/mapa')
def mapa():
    
    return render_template('mapa.html')

@app.route('/mascotas')
def mascotas():
    return render_template('mascotas.html')

@app.route('/encontraste')
def encontraste():    
    return render_template('encontraste_una_mascota.html')

@app.route('/enviado', methods=["POST"])
def enviado():
     
        if request.method == "POST":
            nombre = request.form.get('nombre_animalf')
            animal = request.form.get('animalf')
            edad = request.form.get('edadf')
            raza = request.form.get('raza_animalf')
            color = request.form.get('colorf')
            tamaño = request.form.get('tamañof')
            sexo = request.form.get('sexof')
            zona_latitud = request.form.get('zona_latitudf')
            zona_longitud = request.form.get('zona_longitudf')
            descripcion = request.form.get('descripcionf')
            fecha = request.form.get('fecha_mascotaf')
            mail = request.form.get('user_mailf')
            datos = [nombre, animal, edad, raza, color, tamaño, sexo, zona_latitud, zona_longitud, descripcion, fecha, mail]

            return render_template('formulario_enviado.html', datos=datos)
        
@app.route('/form', methods=['POST'])
def registro():
    
    return render_template('formulario_enviado.html')
if __name__ == '__main__':
    app.run(debug=True, port=5000)