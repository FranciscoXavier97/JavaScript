//NO es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona2 = new Persona("Karla","Juarez");

//se recomienda que el nombre inicie con una mayuscula
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //metodos get
    get nombre(){
        return this._nombre;
    }
    //metodos set
    set nombre(nombre){
        this._nombre = nombre;
    }
}//END CLASS

//instancia de clase u objeto
let persona1 = new Persona("Juan","Perez");
//para obtener el valor
console.log(persona1.nombre); //get nombre
//para modificar el valor 
persona1.nombre = "Juan Carlos";
console.log(persona1._nombre); //set nombre("Juan Carlos")

let persona2 = new Persona("Karla","Juarez");
console.log(persona2);