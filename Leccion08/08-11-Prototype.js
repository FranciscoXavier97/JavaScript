//fucnion constructor de objetos de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;  
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

//agregando una propiedad al constructor
Persona.prototype.tel = "44332211";
Persona.prototype.trabajo = "Mecanico";

//creamos un objeto
let padre = new Persona("Juan","Perez","jp@gmail.com");
padre.tel = "11223344"; //modificamos el valor original
console.log(padre.nombreCompleto());
console.log(padre.tel);

let madre = new Persona("Laura","Quintero","lq@gmail.com");
madre.tel = "66889900"; //modificamos el valor original
console.log(madre.nombreCompleto());
console.log(madre.tel);

let amigo = new Persona("Diego","Quiroz","dq@gmail.com");
console.log(amigo.nombreCompleto());
amigo.trabajo = "IT Engineer"; //modificamos el valor original
console.log(amigo.trabajo);