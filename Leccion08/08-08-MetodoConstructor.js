//fucnion constructor de objetos de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;  
}

//creamos un objeto
let padre = new Persona("Juan","Perez","jp@gmail.com");
console.log(padre);

let madre = new Persona("Laura","Quintero","lq@gmail.com");
console.log(madre);

//modificar objetos
padre.nombre = "franciso";
console.log(padre);