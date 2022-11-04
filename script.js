let slider = document.getElementById("myRange");
let output = document.getElementById("extraLiteres");

output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value;
}
function returnNumber(){
  
let minutes = document.getElementById("inputMinutes").value;
let lapTime = document.getElementById("inputTime").value;
let fuel = document.getElementById("inputFuelConsumption").value;
let literes = parseFloat(minutes) / parseFloat(lapTime/60) * parseFloat(fuel) + parseFloat(output.innerHTML);

if (minutes, lapTime, fuel) {
  alert(literes);
}
else{
  alert('Please add all the variables');
}
}



