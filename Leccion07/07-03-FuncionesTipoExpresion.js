//Declaracion de una funcion del tipo expresion.
let sumar = function (a,b){return a + b};

let resultado = sumar(1,2);
console.log(resultado);

let mensaje = function (str){return "Hola " + str};
resultado = mensaje("Francisco");

console.log(resultado);


let operacion = function(a,b,c,d){return a + b / (c * d)};
resultado = operacion(10,2,6,3);

console.log(resultado);
