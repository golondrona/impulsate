
/* Modificación de comportamiento de los valores de CONTACTO */

function validar() {
  var nombre, apellidos, telefono, email, fecha, mensaje, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  telefono = document.getElementById("telefono").value;
  email = document.getElementById("email").value;
  fecha = document.getElementById("fecha").value;
  mensaje = document.getElementById("mensaje").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if (nombre === "" || apellidos === "" || telefono === "" || email === "" || fecha === "" || mensaje === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }
  else if (nombre.length > 30) {
    alert("El nombre introducido es muy largo");
    return false;
  }
  else if (apellidos.length > 80) {
    alert("El apellido introducido es muy largo");
    return false;
  }
  else if (email.length > 100) {
    alert("El email introducido es muy largo");
    return false;
  }
  else if (!expresion.test(email)) {
    alert("El email no tiene un formato correcto");
    return false;
  }
  else if (telefono.length > 9) {
    alert("Tu teléfono no puede tener más de 9 dígitos");
    return false;
  }
  else if (isNaN(telefono)) {
    alert("El teléfono que has indicado no es numérico");
    return false;
  }

}