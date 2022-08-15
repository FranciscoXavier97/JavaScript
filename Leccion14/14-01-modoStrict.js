/*
    Como hemos visto anteriormente en JavaScript si utilizamos una variable sin haberla declarado 
    JavaScript no nos va indicar ningun error, sin embargo exite el modo estricto en JavaScript 
    para evitar este tipo de practicas.
*/
"use strict"; //lo podemos utilizar al principio de la clase o en una funcion

/*
    Al utilizar el modo estricto no podemos utilizar una variable que no ha sido declarada anteriormente
    y solamente hasta que declaramos la variable entonces ya nos permite utilizar nuestra variable
*/

// x = 10; x is not defined
//console.log(x); x is not defined

let y = 97;
console.log(y);


//z is not defined
mifuncion();

function mifuncion(){
    "use strict"
    z = 15;
    console.log(z);
}