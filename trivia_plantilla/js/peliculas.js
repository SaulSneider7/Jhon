// Arreglo de preguntas con sus respuestas y la opción correcta
const preguntas = [
    {
        pregunta: "¿En que pelicula aparece Jack Nicholson?",
        respuestas: ["50 sombras de Gray", "El resplandor", "Intensamente", "Silen Hill"],
        correcta: 1 // Índice de la respuesta correcta
    },
    {
        pregunta: "¿En que genero de cine se encuentra la pelicula V de vendetta?",
        respuestas: ["Thriller psicologico", "Drama", "Ciencia Ficcion", "Romance"],
        correcta: 2
    },
    {
        pregunta: "¿Cuales eran los personajes principales del Titanic?",
        respuestas: ["Pablito y Juanita", "El brayan y la Gringasha", "Jack Dawson y Rose Dewitt Bukater", "Platanazo y Charito"],
        correcta: 2
    }
];

// Variables globales
var indice_aleatorio = 0; // Índice aleatorio de la pregunta actual
var pregunta_text = ""; // HTML de la pregunta y opciones
var interval; // Intervalo del cronómetro

// Iniciar el juego
iniciar();

function iniciar() {
    loadQuestion(); // Cargar la primera pregunta
}

// Función para iniciar el cronómetro
function iniciar_cronometro() {
    const contador = 15; // Duración del cronómetro en segundos
    const cronometroDisplay = document.getElementById("cronometro"); // Elemento HTML del cronómetro
    iniciarTiempo(contador, cronometroDisplay); // Iniciar el cronómetro
}

// Función para manejar el tiempo del cronómetro
function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
        if (duracion === 0) {
            componente.innerHTML = "Se acabo el tiempo"; // Mostrar mensaje de fin del tiempo
            clearInterval(interval); // Detener el cronómetro
            loadQuestion(); // Cargar una nueva pregunta
        } else {
            if (duracion < 10) {
                duracion = `0${duracion}`; // Agregar un 0 delante si el tiempo es menor a 10
            }
            componente.textContent = `00:${duracion}`; // Mostrar el tiempo en el formato 00:xx
            duracion--; // Decrementar la duración
        }
    }, 1000); // Intervalo de 1 segundo
}

// Función para cargar una nueva pregunta
function loadQuestion() {
    iniciar_cronometro(); // Iniciar el cronómetro
    if (preguntas.length > 0) {
        // Seleccionar una pregunta aleatoria
        indice_aleatorio = Math.floor(Math.random() * preguntas.length);
        pregunta_text = "";

        // Construir el HTML para la pregunta y sus opciones
        pregunta_text += `
            <p>${preguntas[indice_aleatorio].pregunta}</p>
            <button id="opcion0" onclick="verificarRespuestaCorrecta(0, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[0]}</button>
            <button id="opcion1" onclick="verificarRespuestaCorrecta(1, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[1]}</button>
            <button id="opcion2" onclick="verificarRespuestaCorrecta(2, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[2]}</button>
            <button id="opcion3" onclick="verificarRespuestaCorrecta(3, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[3]}</button>
        `;

        // Mostrar la pregunta y sus opciones en la página
        document.getElementById("pregunta").innerHTML = pregunta_text;

        // Eliminar la pregunta seleccionada del arreglo
        preguntas.splice(indice_aleatorio, 1);
    } else {
        // Redirigir a la página de resultados si no hay más preguntas
        window.location.href = "../resultados.html";
    }
}

// Variable para almacenar los puntos del jugador
var puntos = 0;

// Función para verificar si la respuesta seleccionada es correcta
function verificarRespuestaCorrecta(indice, correcta) {
    if (indice == correcta) {
        puntos += 5; // Incrementar los puntos si la respuesta es correcta
    }

    // Guardar el puntaje en localStorage
    localStorage.setItem("SCORE", puntos);

    // Deshabilitar los botones de las opciones para evitar múltiples selecciones
    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;
}

// Función para cargar la siguiente pregunta
function siguientePregunta() {
    clearInterval(interval); // Detener el cronómetro
    loadQuestion(); // Cargar una nueva pregunta
}
