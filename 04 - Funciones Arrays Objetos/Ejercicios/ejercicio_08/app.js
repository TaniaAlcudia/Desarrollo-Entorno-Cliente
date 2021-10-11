// Define una pequeña función mostarArray(unarray) que tome como parámetro un array y 
// muestre los valores del array tal y como han sido inicializados, es decir, los strings entre 
// comillas y los números tal cual (Utiliza el operador typeof, busca información sobre el en 
// Internet).

const array1 = ["Rojo", "Verde", "Azul"];
const array2 = ["70", "9", "800"];
const array3 = [50, 10, 2, 300];
const array4 = ["70", "8", "850", 30, 10, 5, 400];

let nArray = 1;

function mostrarArray(array)
{
    let str = "Array" + nArray + ": ";
    for (let i = 0; i < array.length; i++) 
    {
        if (typeof array[i] == "number")
            str += array[i] + ", ";
        else if (typeof array[i] == "string")
            str += "\"" + array[i] + "\", ";    
    }

    const pHtml = document.createElement("p");
    pHtml.innerHTML = str;
    document.body.appendChild(pHtml);
    nArray++;
}

window.onload = () => 
{
    mostrarArray(array1);
    mostrarArray(array2);
    mostrarArray(array3);
    mostrarArray(array4);
}