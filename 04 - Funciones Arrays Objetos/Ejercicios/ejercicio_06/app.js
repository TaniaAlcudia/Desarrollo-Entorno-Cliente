// Cree un script que defina un objeto llamado Producto_alimenticio. Este objeto debe presentar 
// las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe 
// por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto 
// y guárdelas en un array. Con la ayuda del bucle for, utilice el método imprimeDatos para 
// mostrar por pantalla los valores de los tres objetos instanciados.

const productos = [
    new productoAlimenticio("001", "Cola Cao", 5.99),
    new productoAlimenticio("002", "Aceite", 3.99),
    new productoAlimenticio("003", "Leche", 1.29)        
];

function productoAlimenticio (codigo, nombre, precio)
{
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

function imprimeDatos(producto) 
{
    const pHtml = document.createElement("p");
    pHtml.innerHTML = "Codigo: " + producto.codigo + "<br>Nombre: " + producto.nombre + "<br>Precio: " + producto.precio;
    document.body.appendChild(pHtml);
}

window.onload = () => {

    for (let i = 0; i < productos.length; i++) 
        imprimeDatos(productos[i]);    
}