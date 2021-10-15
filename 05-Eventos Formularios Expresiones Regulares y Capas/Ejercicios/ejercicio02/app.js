let opcionesProcesador = [];
let opcionesOs = [];

function enviar() 
{
    let procesador ="";
    let os = "";

    for (let i = 0; i < opcionesProcesador.length; i++) {
        if (opcionesProcesador[i].checked == true)
        {
            procesador = opcionesProcesador[i].value;
            break;
        }      
    }

    for (let i = 0; i < opcionesOs.length; i++) {
        if (opcionesOs[i].checked == true)
        {
            os = opcionesOs[i].value;
            break;
        }     
    }

    if (procesador.length == 0 || os.length == 0)
        alert("No has seleccionado alguno de los campos");
    else
        alert("Ha seleccionado el procesador " + procesador + " con sistema operativo " + os);
}

function limpiar() 
{
    for (let i = 0; i < opcionesProcesador.length; i++) {
        opcionesProcesador[i].checked = false;      
    }

    for (let i = 0; i < opcionesOs.length; i++) {
        opcionesOs[i].checked = false;     
    }  
}

window.onload = () => 
{
    opcionesProcesador = document.getElementsByName("procesador");
    opcionesOs = document.getElementsByName("os");

    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.onclick = () => enviar();
    
    const btnLimpiar = document.getElementById("btn-limpiar");
    btnLimpiar.onclick = () => limpiar();
}