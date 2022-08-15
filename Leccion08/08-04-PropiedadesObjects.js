//definimos objecto
let persona = {
    nombre : "Francisco",
    apellido : "Alvarez",
    email : "Francisco_97@hotmail.com",
    edad : 24,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//Acceder a las propiedades de los arreglos
console.log(persona.nombre);
console.log(persona["apellido"]);

//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}