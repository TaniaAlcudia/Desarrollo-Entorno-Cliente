//Calcula el tiempo que ha transcurrido desde el primer día de un año especificado 
//en días, horas, minutos y segundos. Por ejemplo:
//Desde el 01/01/1990 han transcurrido 164 días, 23 horas, 0 minutos y 0 segundos.
//Debes usar operaciones de división para calcular el tiempo transcurrido en días, 
//horas, minutos y segundos.

function calcularTiempo()
{
    let anio = prompt("Introduce un año (yyyy)");

    if (anio > new Date().getFullYear())
        window.alert("El año introducido es posterior al año actual");
    else
    {
        let dif = ((new Date() - new Date("01/01/" + anio)) / 1000);

        let seg = Math.floor(dif);
        let min = 0;
        let hora = 0;
        let dia = 0;

        while (seg >= 60)
        {
            seg -= 60;
            min++;
        }

        while (min >= 60)
        {
            min -= 60;
            hora++;
        }

        while (hora >= 24)
        {
            hora -= 24;
             dia++;
        }

        document.write("<p>Desde el 01/01/" + anio + " han transcurrido " + dia + " dias, " + hora + " horas, " + min + " minutos y " + seg + " segundos.</p>");
    }
    
}

window.onload = () => calcularTiempo();