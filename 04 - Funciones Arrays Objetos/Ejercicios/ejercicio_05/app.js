// Crea un array llamado meses. este array deberá almacenar el nombre de los doce meses del 
// año. Muestre por pantalla el nombre de cada uno de ellos utilizando un bucle for.

const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septimebre",
    "octubre",
    "noviembre",
    "diciembre"
];

window.onload = () => {
    for (let i = 0; i < meses.length; i++) {
        document.write(meses[i] + " ");
    } 
}
