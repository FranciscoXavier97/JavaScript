//esto no es un abuena practica, pero es codigo valido
nombre = "Francisco";
console.log(nombre);

//una vez asinado un valor a una variable del tipo const ya no podemnos modificarlo
//const apellido = "Alvarez";
//apellido = "lara";

//lo recomendable es usar la notacion camello, altas y bajas
let nombreCompleto = "Francisco Javier";
console.log( nombreCompleto );

//podemos declar variables en la misma linea
let x,y;
x = 10, y = 20;
//podemos asignar valores en la misma linea 
let z = x + y; 
console.log(z);

//es sensible a mayusculas y minusculas
let nombrecompleto = "Javier Alvarez";
console.log(nombrecompleto);

/*
    el nombre de una variable no puede iniciar con un numero
    let 1nombreCompleto;
    los unicos caracteres permitidos son letras en mayuscula y minuscula
    podemos utilizar _ o $.
    No podemos usar los keywords como nombre de variable. 
*/
let AA , yy;
let _hola;
let $input;