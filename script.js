document.getElementById("button").addEventListener("click", function () {
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("mail").value;
    if (nombre == "" || correo == "") {
        alert("Completar formulario")
    } else {
    alert('Gracias ' + nombre + '!!')
    alert('Voy a mandar un correo a ' + correo)
    }
});
