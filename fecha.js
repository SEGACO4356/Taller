var fecha = new Date();

document.getElementById("fecha").innerHTML=fecha.toLocaleDateString();

var hora = new Date();
document.getElementById("hora").innerHTML=hora.toLocaleTimeString();
