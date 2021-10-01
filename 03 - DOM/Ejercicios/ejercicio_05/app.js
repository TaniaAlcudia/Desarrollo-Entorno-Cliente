//Crear una calculadora:
//Dispondrá de los números del 0 al 9, de los signos +, - , * y / y de la letra C (para 
//limpiar). Lo que el usuario vaya tecleando irá apareciendo en la caja texto y 
//cuando el usuario le dé al botón igual se evaluará la expresión y se mostrará el 
//resultado en la caja de texto. (Controla los posibles errores)

let n1;
let n2
let operador;

uno.onclick = () => {
    resultado.textContent = resultado.textContent  + "1";
}

dos.onclick = () => {
    resultado.textContent = resultado.textContent  + "2";
}

tres.onclick = () => {
    resultado.textContent = resultado.textContent  + "3";
}

cuatro.onclick = () => {
    resultado.textContent = resultado.textContent  + "4";
}

cinco.onclick = () => {
    resultado.textContent = resultado.textContent  + "5";
}

seis.onclick = () => {
    resultado.textContent = resultado.textContent  + "6";
}

siete.onclick = () => {
    resultado.textContent = resultado.textContent  + "7";
}

ocho.onclick = () => {
    resultado.textContent = resultado.textContent  + "8";
}

nueve.onclick = () => {
    resultado.textContent = resultado.textContent  + "9";
}

cero.onclick = () => {
    resultado.textContent = resultado.textContent  + "0";
}

reset.onclick = () => {
    resetear();
}

suma.onclick = () => {
    n1 = resultado.textContent;
    operador = "+";
    limpiar();
}

resta.onclick = () => {
    n1 = resultado.textContent;
    operador = "-";
    limpiar();
}

multiplicacion.onclick = () => {
    n1 = resultado.textContent;
    operador = "*";
    limpiar();
}

division.onclick = () => {
    n1 = resultado.textContent;
    operador = "/";
    limpiar();
}

igual.onclick = () => {
    n2 = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    n1 = 0;
    n2 = 0;
    operador = "";
}

function resolver(){
    var res = 0;
    switch(operador){
      case "+":
        res = parseFloat(n1) + parseFloat(n2);
        break;
      case "-":
          res = parseFloat(n1) - parseFloat(n2);
          break;
      case "*":
        res = parseFloat(n1) * parseFloat(n2);
        break;
      case "/":
        res = parseFloat(n1) / parseFloat(n2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }

window.onload = () => {

    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');

    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');

    let igual = document.getElementById('igual');

    let reset = document.getElementById('reset');

    let resultado = document.getElementById('resultado');
}
