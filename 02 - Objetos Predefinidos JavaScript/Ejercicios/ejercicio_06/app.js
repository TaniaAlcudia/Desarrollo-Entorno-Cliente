//A partir de una fecha de nacimiento calcula la edad del usuario en años. El usuario 
//deberá pedir la fecha de nacimiento en formato (aaaa/mm/dd) y hay que tener en 
//cuenta si el cumpleaños no se ha producido todavía en el año en curso.
//Has nacido el 30/11/1977
//Tienes 35 años

function calcularEdad()
{
    let fecha = prompt("Introduce tu fecha de nacimiento (aaaa/mm/dd)");

    if (!validarFecha(fecha))
        window.alert("Fecha invalida");
    else
    {
        let diasN = new Date(fecha) / 1000 / 60 / 60 / 24;
        let diasAct = new Date() / 1000 / 60 / 60 / 24;

        if (diasN > diasAct)
            document.write("<a href='https://es.wikipedia.org/wiki/Viaje_a_trav%C3%A9s_del_tiempo'>Pincha aquí para leer más sobre viajes en el tiempo</a>");
        else
        {
            let fechaDate = new Date(fecha);
            let fechaInversa = fechaDate.getDate() + "/" + (parseInt(fechaDate.getMonth()) + 1) + "/" + fechaDate.getFullYear();
            document.write("<p>Fecha de nacimiento: " + fechaInversa + "</p>");
            document.write("<p>Tienes " + Math.floor((diasAct - diasN) / 365) + " años</p>");
        }
    }
}

function validarFecha(fecha)
{
    if (!validarFormato(fecha))
        return false;
    else
    {
        let fechaSplit = fecha.split("/");
        let anio = fechaSplit[0];
        let mes = fechaSplit[1];
        let dia = fechaSplit[2];

        if (anio < 0)
            return false;
 
        if (mes < 1 || mes > 12)
            return false;

        if (dia < 1)
            return false;
        
        let diaLimite = 0;

        switch (parseInt(mes)) 
        {
            case 1: 
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                diaLimite = 31;
                break;    
            case 4:
            case 6:
            case 9:
            case 11:
                diaLimite = 30;
                break;
            case 2: 
                if (esBisiesto(anio))
                    diaLimite = 29;
                else
                    diaLimite = 28;
                break;
            default:
                break;
        }

        if (dia > diaLimite)
            return false;
        else
            return true;
    }
}

function validarFormato(fecha)
{
    let regExp = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/g ;
    return regExp.test(fecha);
}

function esBisiesto(anio)
{
    return (anio%4 == 0 && anio%100 != 0) || anio%400 == 0;
}

window.onload = () => calcularEdad();