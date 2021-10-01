const numeros=
{
    "0" : "../images/0.jpg",
    "1" : "../images/1.jpg",
    "2" : "../images/2.jpg",
    "3" : "../images/3.jpg",
    "4" : "../images/4.jpg",
    "5" : "../images/5.jpg",
    "6" : "../images/6.jpg",
    "7" : "../images/7.jpg",
    "8" : "../images/8.jpg",
    "9" : "../images/9.jpg",
    "/" : "../images/barra.jpg",
    ":" : "../images/puntos.jpg"
};

const digitosHora= document.querySelectorAll(".hora");
const digitosFecha = document.querySelectorAll(".fecha");

setInterval(() => {
    let hora = new Date().toLocaleTimeString();
    let date = new Date();
    let dia = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let mes = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let fecha = dia + "/" + mes + "/" + date.getFullYear();
    dibujar(hora, digitosHora);
    dibujar(fecha, digitosFecha);  
}, 1000);

function dibujar(h, digitos)
{
    for (let i = 0; i < digitos.length; i++) 
    {
        const clave = h[i];
        const url = numeros[clave];
        const tdHtml = digitos[i];
        const img = tdHtml.querySelector("img");
        img.src = url;
    }
}