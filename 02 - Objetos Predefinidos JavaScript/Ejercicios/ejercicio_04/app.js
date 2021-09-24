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

function detectarBrowser()
{
    let browser = "Desconocido";

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
        browser = "Opera";
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) 
        browser = "Chrome";
    else if(navigator.userAgent.indexOf("Safari") != -1) 
        browser = "Safari";
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
        browser = "Firefox";
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
        browser = "IE";
    
    return browser;   
}

function detectarSistema()
{
    let sistema = "Desconocido";
    
    if (navigator.appVersion.indexOf("Win") != -1) 
        sistema = "Windows OS";
    else if (navigator.appVersion.indexOf("Mac") != -1) 
        sistema = "MacOS";
    else if (navigator.appVersion.indexOf("X11") != -1) 
        sistema = "UNIX OS";
    else if (navigator.appVersion.indexOf("Linux") != -1) 
        sistema = "Linux OS";

    return sistema;
}

function mostrarInfo()
{
    // screen
    let anchoPantalla = window.screen.width;
    let altoPantalla = window.screen.height;
    document.getElementById("screen").innerHTML=`La resolución de la pantalla es ${anchoPantalla}x${altoPantalla}`;

    //navigator
    document.getElementById("navigator").innerHTML = detectarBrowser();
    document.getElementById("sistema").innerHTML = detectarSistema();
    document.getElementById("version").innerHTML = navigator.appVersion;

    //document
    document.getElementById("document").innerHTML = document.location.pathname;

    //location
    document.getElementById("location").innerHTML = document.location.protocol;

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

window.onload = () =>
{
    mostrarInfo();
    establecerEstilo();
}
