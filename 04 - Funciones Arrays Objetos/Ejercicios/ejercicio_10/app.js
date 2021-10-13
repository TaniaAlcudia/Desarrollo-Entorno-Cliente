// Crear una página con un formulario donde se pida un texto y un botón “Tipo de letra” y que al 
// hacer clic sobre el llame a la función tipoLetras(), a la que se le pasara el texto como argumento 
// y determinara si el texto está formado sólo por mayúsculas, sólo por minúsculas o por una 
// mezcla de ambas. El resultado se mostrará en una nueva ventana con un botón cerrar que 
// cerrara dicha ventana

function tipoLetras(str)
{
    let esMinuscula = false;
    let esMayuscula = false;

    if (str.length < 0)
        alert("Campo Vacio");
    else
    {
        for (let i = 0; i < str.length; i++) 
        {
            if (str.charCodeAt(i) <= 'z'.charCodeAt(0) && str.charCodeAt(i) >= 'a'.charCodeAt(0))
             esMinuscula = true;
            else if (str.charCodeAt(i) <= 'Z'.charCodeAt(0) && str.charCodeAt(i) >= 'A'.charCodeAt(0)) 
                esMayuscula = false;
        }

        let mensaje = "no son letras";

        if (esMayuscula && esMinuscula)
            mensaje = "mayusculas y minusculas";
        else if (esMinuscula)
            mensaje = "minusculas";
        else if (esMayuscula)
            mensaje = "mayusculas";

        const ventana = window.open("", "_blank", "width=300,height=300");

        const pHtml = ventana.document.createElement("p");
        pHtml.innerHTML = "Tipo de letra: " + mensaje;
        
        const btnHtml = ventana.document.createElement("button");
        btnHtml.innerHTML = "CERRAR";
        
        btnHtml.onclick = () => window.close();

        ventana.document.body.appendChild(pHtml);
        ventana.document.body.appendChild(btnHtml);
    }
    
}

window.onload = () => 
{
    const btnValidarHtml = document.getElementById("btn-validar");
    const textoHtml = document.getElementById("texto");
    btnValidarHtml.onclick = () => tipoLetras(textoHtml.value);
}