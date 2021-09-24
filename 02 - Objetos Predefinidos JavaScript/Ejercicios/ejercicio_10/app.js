//Crea una página con un botón que al pulsarlo se abran 5 ventanas emergentes de 
//dimensiones 200x200 cada una de ellas con un botón para cerrarla.

const nVentanas = 5;
const tamanio = 200;
const ventanas = [];

const boton = document.getElementById("btn");
boton.onclick = () => 
{
    for (let cont = 0; cont < nVentanas; cont++)
    {
        // abrir ventana
        ventanas[cont] = window.open("", "_blank", `height=${tamanio}, width=${tamanio}`);

        //crear boton
        const btnCerrar = ventanas[cont].document.createElement("button");
        btnCerrar.innerHTML = "Cerrar";

        // añadirle funcion cerrar al hacer click
        btnCerrar.onclick = () => ventanas[cont].close();
        
        // añadir el boton al body
        const ventanaBody = ventanas[cont].document.querySelector("body");
        ventanaBody.appendChild(btnCerrar);
    }
}

