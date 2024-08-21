function mostrarTexto(texto) {
    document.getElementById("titulo").innerText = texto;
    document.getElementById("formulario-contato").style.display = "none";
}

function mostrarFormulario() {
    document.getElementById("titulo").innerText = "";
    document.getElementById("formulario-contato").style.display = "block";
}
