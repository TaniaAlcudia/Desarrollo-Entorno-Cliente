// Crea un script que tome una serie de palabras ingresadas por el usuario y almacene esas 
// palabras en un array (hay que verificar que el usuario introduce por lo menos una palabra). 
// Posteriormente, manipula ese array para mostrar en una nueva ventana los siguientes datos: 
// a) La primera palabra ingresada por el usuario. 
// b) La última palabra ingresada por el usuario. 
// c) El número de palabras presentes en el array. 
// d) Todas las palabras ordenadas alfabéticamente.

window.onload = () => {
    let str = prompt("Introduce palabras:");
    if (str.trim().length > 0)
    {
        const palabras = str.split(" ");

        const ventana = window.open();

        const primeraHtml = ventana.document.createElement("p");
        const ultimaHtml = ventana.document.createElement("p");
        const cantidadHtml = ventana.document.createElement("p");
        const ordenadasHtml = ventana.document.createElement("p");

        primeraHtml.innerHTML = palabras[0];
        ultimaHtml.innerHTML = palabras[palabras.length - 1];
        cantidadHtml.innerHTML = palabras.length;
        ordenadasHtml.innerHTML = palabras.sort().join(" - ");

        ventana.document.body.appendChild(primeraHtml);
        ventana.document.body.appendChild(ultimaHtml);
        ventana.document.body.appendChild(cantidadHtml);
        ventana.document.body.appendChild(ordenadasHtml);
    }    
    else
        alert("Campo invalido");
}





