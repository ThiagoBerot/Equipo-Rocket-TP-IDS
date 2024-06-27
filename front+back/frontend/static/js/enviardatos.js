document.getElementById('mascotaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('http://127.0.0.1:5001/mascotas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.message.includes('Se ha agregado correctamente')) {
            window.location.href = 'formulario_enviado';
        } else {
            alert('Error al enviar los datos: ' + result.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar los datos');
    });
});