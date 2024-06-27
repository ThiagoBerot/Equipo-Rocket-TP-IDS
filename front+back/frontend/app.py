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

@app.route('/encontraste', methods=['GET', 'POST'])
def encontraste():
    if request.method == 'POST':
        return redirect(url_for('formulario_enviado'))
    else:
        return render_template('encontraste_una_mascota.html')

@app.route('/formulario_enviado')
def formulario_enviado():
    return render_template('formulario_enviado.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)