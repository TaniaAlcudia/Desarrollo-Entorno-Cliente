// Crea página que le solicite al usuario dos números (hay que comprobar que el usuario 
// efectivamente introduce dos números y utilizar la función parseInt para convertirlos en 
// enteros), hay que crear también una función suma que reciba por parámetros los dos 
// sumandos y devuelva el valor de la suma. La página debe mostrar mediante la función 
// document.write los datos introducidos por el usuario y valor devuelto por la función (no hay 
// que usar document.write dentro de la función).

function validarNumero(n)
{
    const valoresAceptados = /^[0-9]+$/;
        if (n.match(valoresAceptados))
            return true;
    return false;
}

function sumar(n1, n2)
{
    return n1 + n2;
}

window.onload = () => {

    const n1 = prompt("Introduce un numero");
    if (validarNumero(n1))
    {
        const n2 = prompt("Introduce otro numero");
        if (validarNumero(n2))
            document.write(n1 + " + " + n2 + " = " + sumar(n1, n2));
        else
            alert("Campo invalido");
    }
    else
        alert("Campo invalido");

}