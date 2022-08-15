//declaracion de la funcion
function f1(a, b){  
    //conocer los parametros se definieron en la funcion
    console.log(arguments.length);
    return a + b;
}

let resultado = f1(5,5);
console.log(resultado);


console.log(typeof f1);

//mandar impirmir la funcion en texto
var miFuncionTexto = f1.toString();
console.log(miFuncionTexto);
