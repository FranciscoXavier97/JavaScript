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

//mandar imprimir el obejeto
console.log(persona);

//concatenar cada valor de cada prioridad
console.log(persona.nombre + ", " + persona.apellido);

//for in
for(nombrePropiedad in  persona){
    console.log(persona[nombrePropiedad]);
}

//object.values() - regresa un arrglo con los valores del objeto
let personaArray = Object.values(persona);
console.log(personaArray);

//JSON.stringify() - convierte a una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);