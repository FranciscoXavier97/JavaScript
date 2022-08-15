/*
Ejemlos de tipos de datos en 
         JavaScript
*/

//Tipo de dato String
var nombre = "francisco";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Francisco",
    appellido : "Alvarez",
    telefono : "8445017134"
}
console.log(objecto);
console.log(typeof objecto);

//reutilizar variables - se dice que son dinamicas.
nombre = 10;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato boolean (true,false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;   
    }
} 
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);
//se puede asignar como valor undefined
x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arreglos
var autos = ["BMW","AUDI","VOLVO"];
console.log(autos);
console.log(typeof autos);

//cadena vacia
var z = "";
console.log(z);
console.log(typeof z);

