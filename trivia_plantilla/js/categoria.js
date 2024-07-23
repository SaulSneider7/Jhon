// Función para mostrar el nombre almacenado en el localStorage
function pintarNombre() {
    var jugador = document.getElementById('jugador');// Obtener el elemento HTML con el id 'jugador'
    var nombre = localStorage.getItem("name");// Obtener el valor almacenado en localStorage con la clave "name"

    jugador.innerHTML = nombre;// Asignar el nombre obtenido al contenido HTML del elemento 'jugador'
}

// Llamar a la función para mostrar el nombre cuando se carga la página
pintarNombre();
