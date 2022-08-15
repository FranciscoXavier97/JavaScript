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

//accedemos al objecto
console.log(persona.nombre); 
console.log(persona.edad);
console.log(persona.nombreCompleto());

