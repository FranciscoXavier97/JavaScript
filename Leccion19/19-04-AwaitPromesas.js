/*
    En una promesa vamos utilizar funciones del tipo callback, una promesa es un codigo que tiene varios estados
    vamos a lanzar una apetecion para porcesar un codigo, en dado caso de que la promesa se halla resuelto correctamente
    y en caso de que haya tenido problemas se manda llamar el caso de Rejected
*/

let miPromesa = new Promise((resolver,rechazar) => {
    // simula los dos caminos, si es verdadera ejecutara el caso exitoso  y si es falsa vmos ejecutar el caso de rechazo 
    let expresion = true;
    if(expresion)
        resolver("Resolvió corecto");
    else
        rechazar("Se produjo un error");
});

let promesa = new Promise((resolver) => {
    setTimeout(()=> resolver("Saludos con promesa y timeOut"),3000);
});

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}

//async/await
async function miFuncionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver("promesa con await");
    });
    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();