document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseFloat(document.getElementById('campoA').value);
    const valorCampoB = parseFloat(document.getElementById('campoB').value);

    if (valorCampoA > valorCampoB) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#sucesso').style.display = 'none';
    } else {
        document.querySelector('#sucesso').style.display = 'block';
        document.querySelector('#error').style.display = 'none';
        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    }
})
