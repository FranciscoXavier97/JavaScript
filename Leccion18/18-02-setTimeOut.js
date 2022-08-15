function miFuncion(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2")
}

miFuncion2();
miFuncion();

//Funciones de tipo callback
function imprimir (mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir);

/*
    Sincronos.- se ejecute linea a linea
    Asincronos.- ejecutar procesos por separado
*/

//llamdas asincronas con uso setTimeOut
function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3 seg");
}

setTimeout(miFuncionCallback,3000);

//Funcion setTimeout()
setTimeout(function(){console.log("Saludo asincrono 2")}, 4000);

//funcion flecha
setTimeout( () => console.log("Saludo asincrono 3"), 5000);

//funcion setInterval()

