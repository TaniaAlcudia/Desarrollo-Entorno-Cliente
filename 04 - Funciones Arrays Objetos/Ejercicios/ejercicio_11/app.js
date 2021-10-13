// Juego del número secreto. La página generará un número al azar entre 1 y 100 (ambos 
// inclusive).El usuario irá introduciendo números por teclado y el ordenador le irá dando pistas: 
// “mi número es menor” o “mi número es mayor”, hasta que el usuario acierte. Entonces se le 
// felicitará y se indicará el número de intentos que necesitó para acertar el número secreto.

const numSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let hasAcertado = false;
var erNumeros = /^[0-9]+$/;


window.onload = () => {
    
    do {
        const numUsuario = prompt("Introduce un numero entre 1 y 100");
        if (numUsuario.match(erNumeros))
        {
            if (numUsuario == numSecreto) {
                hasAcertado = true;
                alert("Enhorabuena! has acertado en " + intentos +" intentos.");
            }
            else if (numUsuario < numSecreto) {
                alert("Mi número es mayor");
                intentos++;
            }
            else {
                alert("Mi número es menor");
                intentos++;
            }
        }
        else
            alert("No has introducido un numero");
    
    } while (!hasAcertado)
}
