// Función para mostrar el puntaje almacenado en el localStorage
function pintarResultado() {
    var puntaje = localStorage.getItem("SCORE");// Obtener el puntaje almacenado en localStorage con la clave "SCORE"
    var puntaje_contenedor = document.getElementById("SCORE");// Obtener el elemento HTML con el id 'SCORE'
    
    puntaje_contenedor.innerHTML = puntaje;// Asignar el puntaje obtenido al contenido HTML del elemento 'SCORE'
}

// Llamar a la función para mostrar el puntaje cuando se carga la página
pintarResultado();
