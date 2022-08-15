//Declaracion de una funcion del tipo expresion.
let sumar = function (a,b){return a + b};

let resultado = sumar(1,2);
console.log(resultado);

//Fucion flecha equivalente a la funcion tipo expresion que declaramos anteriormente
const sumarFuncionTipoFlecha = (a,b) => a + b;

resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);

