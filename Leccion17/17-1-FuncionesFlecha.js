function mifuncion(){
    console.log("Saludos desde mi funcion");

}

mifuncion();

//podemos declarar una variable y asiganrle una funcion 
let miFuncion = function(){
    console.log("Saldudos desde mi funcion");
}

miFuncion();

//funcion flecha =>
//let miFuncionFlecha = () => {
//console.log("Saludos desde mi funcion flecha");
//}

//const miFuncionFlecha = () => console.log("Saludos desde mi funcion flecha");

//miFuncionFlecha(); //mandamos llamar la funcion

//const saludar = () => {
    //return "Saludos desde funcion flecha";
//}

function saludar() {
    return 'Saludos desde funcion flecha';
} 
console.log(saludar());

//funcion flecha objeto 
const regresaObjeto = () => ({nombre:"juan",apellido:"Lara"});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Saludos con parametros");


const funcionConVariosParametros = (op1,op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}

console.log(funcionConVariosParametros(3,8));