//definimos variables
let a =  3, b = 2, c = 1, d= 4;

//operadores aritmeticos

//suma
let z = a + b;
console.log("Resultado de la suma: " + z);

//Resta
z = a - b;
console.log("Resultado de la resta: " + z);

//Multpilicacion
z = a * b;
console.log("Resultado de la multiplicación: " + z);

//Division
z = a / b;
console.log("Resultado de la división: " + z);

//modulo
z = a % b;
console.log("Resultado del modulo (residuo: " + z);

//Exponente
z = a ** b;
console.log("Resultado del operador exponente: " + z);

//incremento y decremento

//Pre-incremento ( el operador ++ antes de la variable)
z = ++ a; //aumenta uno
console.log(a);
console.log(z);
//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Pre-decremneto
z = --a;
console.log(a);
console.log(z);
//post_decremento
z = b--;
console.log(b);
console.log(z); 

//precedencia de operadores
z = a * b + c / 4;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);

//operadores de asignacion
//incremenentar
a += 1;
console.log(a);

//decrementar 
a -= 2;
console.log(a);

/**
     =
    /=
    %=
    **=
 */

//operadores de comparacion

let e = 3, f = 2, g = "3";

//operador == revisa el valor sin importar el tipo 
let x = e == f;
console.log(x);

//operador === revisa los valores son iguales pero tambien los tipos 
x = e === f;
console.log(x);

//operador != revisa el valor sin importar el tipo 
x = e != f ;
console.log(x);

//operador !=== revisa los valores pero tambien los tipos 
x = e !== g;
console.log(x);

//operadores relacionales

//operador <
x = e < f;
console.log(x)

//operador <=
x = e <= f;
console.log(x);

//operaodr >
x = e > f;
console.log(x);

//operador >=
x = e >= f;
console.log(x);

//operadores logicos

//operador AND (&&), regresa true solo si ambos operandos son true
let n = 5;
let valMin = 0, ValMax = 10;


if(n >= valMin && n <= ValMax ){ 
   //0-----5-----10 
   console.log("Dentro del rango");
}
else{
   console.log("Fuera del rango")
}

//operador OR (||), regresa true si cualquier operando es true
let vacaciones = true, diaDescanso = false;

if(vacaciones || diaDescanso){
   console.log("Padre puede aistir al juego del hijo");
}
else{
   console.log("El padre esta ocupado");
}

//operador ternario
let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado); 