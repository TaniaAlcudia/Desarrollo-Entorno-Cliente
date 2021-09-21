//Haciendo uso del objeto Date, solicita un nombre al usuario y calcula el tiempo 
//que tarda en segundos.

function pedirNombre()
{
    let pre = new Date();
    let nombre = prompt("Introduce tu nombre:");
    let post = new Date();
    
    document.write(nombre + ", has tardado " + ((post-pre)/1000).toFixed(2) + " segundos en introducir tu nombre.");
}