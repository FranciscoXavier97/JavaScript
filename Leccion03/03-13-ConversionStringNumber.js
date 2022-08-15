//conversion de tipo String a numero
let miNumero = "25";
console.log(miNumero);
//console.log(typeof miNumero);

let edad = Number(miNumero);
//console.log(typeof edad);

if(isNaN(edad)){
    console.log("No es un numero")
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}


//conversion con el operador ternario
let edad2 = 15;

if(isNaN(edad)){
    console.log("No es un numero")
}
else{
    let resultado = (edad2 >= 18) ? "Puede votar" : "Muy joven para votar";
    console.log(resultado);
}
