//fucnion constructor de objetos de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;  
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

//creamos un objeto
let padre = new Persona("Juan","Perez","jp@gmail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Laura","Quintero","lq@gmail.com");
console.log(madre.nombreCompleto());

let amigo = new Persona("Sergio","Lopez","sl@gamil.com");
console.log(amigo.nombreCompleto());





