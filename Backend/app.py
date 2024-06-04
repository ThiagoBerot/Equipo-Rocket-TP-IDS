from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

# abro backend


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/encontraste')
def encontraste():
    return render_template('encontraste_una_mascota.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)