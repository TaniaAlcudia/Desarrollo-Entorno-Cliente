window.onload = () => {

    const box = document.createElement("div");
    box.setAttribute("style", "border-style:solid; padding:0px 10px;");

    const p1 = document.createElement("p");
    p1.innerHTML = "Numero de enlaces de la pagina: " + numeroEnlaces();
    box.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = "Direccion penultimo enlace: " + penultimoEnlace();
    box.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerHTML = "Numero de enlaces que apuntan a 'http://prueba': " + enlacesPrueba();
    box.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerHTML = "Numero de enlaces del tercer parrafo: " + enlacesParrafo3();
    box.appendChild(p4);

    document.body.appendChild(box);
}

// Numero de enlaces de la pagina
function numeroEnlaces()
{
    return document.getElementsByTagName("a").length;
}

// Direccion del penultimo enlace
function penultimoEnlace()
{
    const enlaces = document.getElementsByTagName("a");
    return enlaces[enlaces.length - 2];
}

// Numero de enlaces que apuntan a http://prueba
function enlacesPrueba()
{
    let contEnlaces = 0;
    const enlaces = Array.from(document.getElementsByTagName("a"));
    enlaces.forEach(element => {
        if (element.href == "http://prueba/")
            contEnlaces++;
    });
    return contEnlaces;
}

// Numero de enlaces del tercer parrafo
function enlacesParrafo3()
{
    const parrafos = document.getElementsByTagName("p");
    return parrafos[2].getElementsByTagName("a").length;
}