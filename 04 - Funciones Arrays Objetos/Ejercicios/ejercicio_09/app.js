// Haciendo uso del objeto Date, solicita una fecha en un formato correcto (dd/mm/aaaa): 
// Y obtén los siguientes datos relativos a las fechas: 
// Se debe comprobar que la fecha introducida es una fecha correcta en el formato indicado, y en 
// caso contrario indicarle al usuario que no es correcta. Para ello, define una función 
// fechaValida() que compruebe una fecha. Esta función no debe tener ningún parámetro.

const nAniosVisibles = 5;
const diasSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

function validarFecha(fecha)
{
    if (!validarFormato(fecha))
        return false;
    else
    {
        let fechaSplit = fecha.split("/");
        let anio = fechaSplit[2];
        let mes = fechaSplit[1];
        let dia = fechaSplit[0];

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
    let regExp = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g ;
    return regExp.test(fecha);
}

function esBisiesto(anio)
{
    return (anio%4 == 0 && anio%100 != 0) || anio%400 == 0;
}

window.onload = () => {
    const fecha = prompt("Introduce uba fecha (dd/mm/yyyy)");

    if (!validarFecha(fecha))
        alert("Fecha invalida");
    else
    {
        const trAniosHtml = document.getElementById("anios");
        const trDiasSemanaHtml = document.getElementById("dias-semana");
        const spanFechaHtml = document.getElementById("fecha-introducida");
        spanFechaHtml.innerHTML = fecha;

        let fechaSplit = fecha.split("/");
        let anio = fechaSplit[2] - (nAniosVisibles - 1);
        let mes = fechaSplit[1];
        let dia = fechaSplit[0];

        for (let i = 0; i < nAniosVisibles; i++) {    
            
            let f = new Date(anio, mes - 1, dia);
            console.log(f);
            
            const tdAnioHtml = document.createElement("td");
            const tdDiasSemanaHtml = document.createElement("td");

            tdAnioHtml.innerHTML = anio;
            tdDiasSemanaHtml.innerHTML = diasSemana[f.getDay()];

            trAniosHtml.appendChild(tdAnioHtml);
            trDiasSemanaHtml.appendChild(tdDiasSemanaHtml);

            anio++;    
        }
    }
}

