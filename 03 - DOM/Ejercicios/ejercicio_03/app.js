//Completar el código JavaScript proporcionado (ejercicio3.html) para que se 
//añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón. Utilizar 
//las funciones DOM para crear nuevos nodos y añadirlos a la lista existente. 
function anade() 
{
    const lista = document.getElementById('lista');
    const liHtml = document.createElement("li");
    liHtml.innerHTML = "Elemento añadido";
    lista.appendChild(liHtml);
}