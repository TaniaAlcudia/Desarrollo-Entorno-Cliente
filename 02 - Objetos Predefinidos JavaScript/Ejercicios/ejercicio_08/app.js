//Usando el objeto String muestra los siguientes datos relativos la cadena de texto 
//“Hola”

const FILAS = 2;
const CADENA = "!Hola!";

let sw = 1;
let str = "<table>";

for (let i = 0; i < FILAS; i++) 
{
    if (sw == 1)
        str += "<tr><td style='border: 1px solid;'>Posicion</td>";
    else
        str += "<tr><td style='border: 1px solid;'>Contenido</td>"; 

    for (let j = 0; j < CADENA.length; j++) 
    {
        if(sw == 1)
            str += "<td style='border: 1px solid; padding: 0px 25px;'>" + j + "</td>";
        else
            str += "<td style='border: 1px solid; padding: 0px 25px;'>" + CADENA.charAt(j) + "</td>";
    }

    str += "</tr>";
    sw *= -1;
}

str += "</table>";
document.write(str);


 
