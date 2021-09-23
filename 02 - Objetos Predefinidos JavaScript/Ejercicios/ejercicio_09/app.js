//Crea una página con un formulario donde se pida al usuario su nombre y apellidos 
//y un botón “Entrar”. Al hacer click sobre el botón Entrar sino se ha rellenado el
//campo nombre y apellidos debe dar un aviso y en caso contrario abrir una ventana 
//de bienvenida con un botón para poder cerrar esta ventana y redirigir la ventana 
//principal a la página de google. La ventana emergente tiene que aparecer en el 
//centro de la pantalla y tener unas dimensiones de 300x300

function abrirVentana()
{
    const inputHtml = document.getElementById("input");
    const nombre = inputHtml.value;

    if (nombre == "")
        window.alert("Introduce nombre y apellidos");
    else
    {   const tamanio = 300;
        const left = window.innerWidth / 2 - tamanio / 2;
        const top = window.innerHeight / 2 - tamanio / 2;
        const ventana = window.open("./ventana.html", "_blank", `top=${top}, left=${left}, height=${tamanio}, width=${tamanio}`);
        
        ventana.onload = () => 
        {
            const pHtml = ventana.document.getElementById("mensaje");
            pHtml.innerHTML = "Bienvenide " + nombre;
            const btnSalir = ventana.document.getElementById("salir");
            btnSalir.onclick = () => 
            {
                ventana.close();
                document.location.href = "https://google.es";
            }
        }
    }
}

const btnEntrar = document.getElementById("enviar");
btnEntrar.onclick = abrirVentana;