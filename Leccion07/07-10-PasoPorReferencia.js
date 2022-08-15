//La variable persona almacena una referencia a un objeto 
const persona = {
    nombre : "Francisco",
    apellido : "Alvarez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Javier";
    p1.apellido = "Torres";
}

//paso por referencia 
cambiarValorObjeto(persona);
console.log(persona);


