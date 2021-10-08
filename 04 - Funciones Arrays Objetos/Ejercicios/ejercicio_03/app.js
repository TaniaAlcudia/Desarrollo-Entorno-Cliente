// Escribe una función que reciba como parámetro un número entero y devuelva como resultado 
// una cadena que indique si el número es par o impar. Muestre el resultado por pantalla a través 
// del método alert(). Prueba la función pidiendo al usuario un número y llamando a la función 
// para que muestre si es par o impar

function esPar(n)
{
    if (n%2 == 0)
        return "El numero introducido es PAR";
    else
        return "El numero introducido es IMPAR"; 
}

function validarNumero(n)
{
    const valoresAceptados = /^[0-9]+$/;
        if (n.match(valoresAceptados))
            return true;
    return false;
}

window.onload = () => {

    const n = prompt("Introduce un numero");

    if (validarNumero(n))
        alert(esPar(n));
    else
        alert("Campo invalido");    
}

