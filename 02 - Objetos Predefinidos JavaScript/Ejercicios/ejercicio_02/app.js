//Crea  una  página  web  que  recoja  el  valor  de  la  anchura  y  la  altura  total  de  la 
//pantalla del usuario y calcule su diagonal.

let alto = window.screen.height;
let ancho = window.screen.width;
let diagonal = Math.hypot(alto, ancho);

document.write("Altura total de la pantalla: " + alto + "<br>");
document.write("Anchura total de la pantalla: " + ancho + "<br>");
document.write("Diagonal: " + diagonal);