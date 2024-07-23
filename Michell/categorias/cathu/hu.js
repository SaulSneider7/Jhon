
window.onload = updateClock;

var totalTime = 15;

function updateClock() {
  document.getElementById('cronometro').innerHTML = totalTime;
  if(totalTime==0){
    console.log('Final');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}



var preguntas = ["¿En qué año comenzó la Revolución Francesa","¿Cuánto duró la guerra de los Cien Años?","¿Qué filósofo griego fue discípulo de Sócrates y maestro de Aristóteles?","¿Qué batalla marcó el final del dominio napoleónico en Europa en 1815?","¿Cuál de los siguientes imperios no existió en la antigua Mesopotamia"]

var alternativas = [
  ["1779","1789","1804","1812"];
  ["116 años","10 años","100 años","99 años"];
  ["Diógenes","Platón","Heráclito","Apolo"];
  ["Batalla de Austerlitz", "Batalla de Borodino", "Batalla de Leipzig", "Batalla de Waterloo"];
  ["Imperio Acadio", "Imperio Asirio", "Imperio Hitita", "Imperio Babilónico"]
]
  
var respuestas = [1,0,1,3,2]

function verificarRespuezt(params) {
  
}


