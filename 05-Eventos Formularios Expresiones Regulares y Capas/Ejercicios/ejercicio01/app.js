let opciones = [];

function enviar() 
{
    let str = "";

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked == true)
            str += opciones[i].value + "\n"; 
    }

    if (str.length > 0)
        alert("Ha seleccionado las opciones:\n" + str);
    else
        alert("Ninguna opción seleccionada");

}

function limpiar() 
{
    for (let i = 0; i < opciones.length; i++) {
        opciones[i].checked = false; 
    }
}

window.onload = () => 
{
    opciones = document.getElementsByTagName("input");

    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.onclick = () => enviar();
    
    const btnLimpiar = document.getElementById("btn-limpiar");
    btnLimpiar.onclick = () => limpiar();
}