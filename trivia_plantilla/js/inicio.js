// Función para guardar el nombre en el localStorage
function guardar_nombre() {
    var nombre = document.getElementById("nombre").value;// Obtener el valor del campo de entrada con el id 'nombre'    
    localStorage.setItem("name", nombre);// Almacenar el valor obtenido en localStorage con la clave 'name'
}
