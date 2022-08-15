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

//agregar un anueva propiedad
persona.tel = "458894125";
console.log(persona); 

//elimiar propiedad
delete persona.tel;
console.log(persona);