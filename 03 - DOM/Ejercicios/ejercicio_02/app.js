//El la pagina proporcionada (ejercicio2.html) tenemos dos textos uno que se 
//muestra y otro oculto. Cuando ejecutamos la página no sale un texto más un 
//enlace seguir leyendo, al pulsar sobre seguir leyendo tiene que desaparecer el 
//enlace y aparecer el texto que estaba oculto
function muestra()
{
    document.getElementById("adicional").className = "visible";
    document.getElementById("enlace").className = "oculto";
}