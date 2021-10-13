// Crear una página con un formulario donde se pida un texto y un botón “Tipo de letra” y que al 
// hacer clic sobre el llame a la función tipoLetras(), a la que se le pasara el texto como argumento 
// y determinara si el texto está formado sólo por mayúsculas, sólo por minúsculas o por una 
// mezcla de ambas. El resultado se mostrará en una nueva ventana con un botón cerrar que 
// cerrara dicha ventana

function tipoLetras(str)
{
    let esMinuscula = false;
    let esMayuscula = false;
    let esMixto = false;

    for (let i = 0; i < str.length; i++) 
    {
        if (str.charCodeAt(i) <= 'z'.charCodeAt(0) && str.charCodeAt(i) >= 'a'.charCodeAt(0))
        {
            if (esMayuscula)
            {
                esMixto = true;
                break;
            }

            esMinuscula = true;
        }
        else if (str.charCodeAt(i) <= 'Z'.charCodeAt(0) && str.charCodeAt(i) >= 'A'.charCodeAt(0))
        {
            if (esMinuscula)
            {
                esMixto = true;
                break;
            }

            esMayuscula = false;
        }    
    }

    if (esMixto)
        abrirVentana("Mixto");
    else if (esMayuscula)
        abrirVentana("Mayusculas");
    else if (esMinuscula)
        abrirVentana("Minusculas");
    else
        abrirVentana("Glifos");
}

function abrirVentana(tipoDeLetra)
{
    const ventana = window.open("./mayus.html", "Tipo de Letra", "width=300,height=300");
    console.log("LA PUTA MADREEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
  
}   

window.onload = () => {
    const btnValidarHtml = document.getElementById("btn-validar");
    const textoHtml = document.getElementById("texto");
    btnValidarHtml.onclick = () => tipoLetras(textoHtml.value);
}