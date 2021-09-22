//Usando el objeto String muestra los siguientes datos relativos la cadena de texto 
//“Hola”

const FILAS = 2;
const CADEA = "!Hola!";

let sw = 1;
let str = "<table>";

for (let i = 0; i < FILAS; i++) 
{
    if (sw == 1)
        str += "<tr><td>Posicion</td>";
    else
        str += "<tr><td>Contenido</td>"; 

    for (let j = 0; j < CADENA.length; j++) 
    {
        if(sw == 1)
            str += "<td>" + j + "</td>";
        else
            str += "<td>" + CADENA.charAt(j) + "</td>";
    }

    str += "</tr>";
    sw *= -1;
}

    str += "</table>";
    document.write(str); 
