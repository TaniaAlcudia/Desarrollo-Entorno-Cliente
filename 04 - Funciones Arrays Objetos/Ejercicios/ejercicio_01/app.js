// A partir del siguiente array: var palabras = new Array( 'botella', 'zeta', 'androide', 'minuto')
// ordena alfabéticamente sus elementos y muestra el resultado por pantalla separados por un 
// guión.

const palabras = new Array( 'botella', 'zeta', 'androide', 'minuto');

window.onload = () => {
    palabras.sort();
    const outputHtml = document.getElementById('output');
    outputHtml.innerHTML = palabras.join('-');
}


