/*En la barra de estado se mostrará el mensaje “Bienvenido a JavaScript” También debes abrir una nueva ventana en el navegador que muestre la página de 
Google. Dicha ventana debe tener las características siguientes: 

- El tamaño de la ventana o puede ser modificado 
- No hay barras de desplazamiento 
- No se debe incluir la barra de herramientas 
- No se debe incluir la barra de direcciones 
- No tiene barra de estado 
- Si hay barra de menús 
- El ancho de la ventana es de 600 y el alto de 400 
- Las coordenadas son top=50 y left=150*/

window.onload=function()
{
    mostrarInfoScreen();
    establecerEstilo();
}

function mostrarInfoScreen()
{
    let anchoPantalla = window.screen.width;
    let altoPantalla = window.screen.height;
    document.getElementById("screen").innerHTML=`La resolución de la pantalla es ${anchoPantalla}x${altoPantalla}`;
}

function establecerEstilo()
{
    for(let elementHtml of document.getElementsByClassName("box"))
        elementHtml.setAttribute("style", "margin: 0em auto 0.2em; font-family: Arial, Helvetica, sans-serif;");

    for(let elementHtml of document.getElementsByClassName("titulo"))
        elementHtml.setAttribute("style", "text-decoration:underline; font-weight: bold;");

    for(let elementHtml of document.getElementsByClassName("negrita"))
        elementHtml.setAttribute("style", "font-weight: bold;");

        document.getElementById("azul").style.border='2px solid #049DD9'; 
        document.getElementById("rojo").style.border='2px solid #EB413D';
        document.getElementById("verde").style.border='2px solid #52A16D';
        document.getElementById("amarillo").style.border='2px solid #F2BE3D';
}
