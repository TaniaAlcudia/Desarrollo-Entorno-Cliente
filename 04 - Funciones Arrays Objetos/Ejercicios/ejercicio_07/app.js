// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático 
// sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 
// 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de 
// letras. 
// var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 
// 'C', 'K', 'E', 'T'); 
// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. 
// Con estos datos, elaborar una función que compruebe que el DNI proporcionado por el usuario 
// es válido o no:

// - Crear un formulario con un campo texto para introducir el DNI (con la letra) y botón 
// validar que al hacer clic sobre él va a llamar a la función validarDNI

// - Lo primero que hay que hacer es comprobar que se han introducido 8 números y una 
// letras y guardar cada parte en una variable

// - Si el número es válido, se calcula la letra que le corresponde según el método explicado 
// anteriormente.

// - Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no 
// coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es 
// correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI 
// son correctos

const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

function validarDni(dni)
{
    const erDni = /^\d{8}[a-zA-Z]$/;
    let mensaje = "";

    if(erDni.test (dni))
    {
        let numero = dni.substr(0, dni.length-1);
        let letra = dni.substr(dni.length-1,1);
        let letraValidada = letras[numero%23];

        if (letraValidada == letra.toUpperCase())
            mensaje = "DNI valido";
            
        else
            mensaje = "DNI invalido";      
    }
    else
        mensaje = "El DNI introducido no es válido";
    
    return mensaje;
}

window.onload = () => {
    const validarHtml = document.getElementById("validar");
    validarHtml.onclick = () => 
    {
        const dniHtml = document.getElementById("dni");
        const pHtml = document.createElement("p");
        pHtml.innerHTML = validarDni(dniHtml.value);
        document.body.appendChild(pHtml);
    }
    
}