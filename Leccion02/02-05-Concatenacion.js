var nombre = "Francisco";
var apellido = "Alvarez";
//concatenamos valores 
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Xavier" + " " + "Alvarez";
console.log(nombreCompleto2);

var x = nombre + 19 + 97;
console.log(x);

//toma en prioridad los parentesis
x = nombre + (50 + 50);
console.log(x);

//se evalua de izquierda a derecha y como encontro los numeros hace la operacion
//si hubiera encontrado un cadena y despues los numeros los concatena por que los toma como cadenas
x = 20 + 40 + nombre;
console.log(x);

