//Haciendo uso del objeto text muestra dos cajas de texto y un botón de forma que 
//cuando se pulse sobre el botón el contenido de la caja izquierda pase a la caja 
//derecha

const btnHtml = document.getElementById('btn');
btnHtml.onclick = () => 
{
    const input1Html = document.getElementById('txt1');
    const input2Html = document.getElementById('txt2');
    input2Html.value = input1Html.value;
    input1Html.value = "";
}