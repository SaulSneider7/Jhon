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