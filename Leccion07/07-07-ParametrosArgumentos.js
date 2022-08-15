//declaracion funcion de tipo expresion
let sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

resultado = sumar (3,2);
console.log(resultado);

let operacion = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a * b + arguments[2];
};

resultado = operacion(5,6,20);
console.log(resultado);