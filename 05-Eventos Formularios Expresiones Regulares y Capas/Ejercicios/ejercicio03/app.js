let selectProcesador;
let selectOs;

function enviar() 
{
    let procesador = selectProcesador.options[selectProcesador.selectedIndex].value;
    let os = "";

    const oos = selectOs.getElementsByTagName("option");

    for (let i = 0; i < oos.length; i++) {
        if (oos[i].selected == true)
            os += oos[i].value + " ";
    }

    alert("Ha seleccionado el procesador " + procesador + " con sistema operativo " + os);
}

function limpiar() 
{
    selectProcesador.getElementsByTagName("option")[2].selected = true;
 
    const oos = selectOs.getElementsByTagName("option");

    for (let i = 0; i < oos.length; i++) {
        if (oos[i].selected == true)
            oos[i].selected = false;
    }

    oos[1].selected = true; 
}

window.onload = () => 
{
    selectProcesador = document.getElementsByName("procesador")[0];
    selectOs = document.getElementsByName("os")[0];

    const btnEnviar = document.getElementById("btn-enviar");
    btnEnviar.onclick = () => enviar();
    
    const btnLimpiar = document.getElementById("btn-limpiar");
    btnLimpiar.onclick = () => limpiar();
}