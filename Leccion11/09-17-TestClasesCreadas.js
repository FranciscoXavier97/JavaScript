class Persona{
    //varibles estaticas
    static contadorPersonas = 0;

    //Constructor
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    //metodos get y set
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }

    //toString method - Pueder ser concatenado o en template
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`;
    }
}//CLASS-PERSONA

class Empleado extends Persona{
    //variables estaticas
    static contadorEmpleados = 0;

    //Constructor
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //metodos get y set
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this.sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    
    // toString method
    toString(){
         return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}//CLASS-EMPLEADO

class Cliente extends Persona{
    //variables static
    static contadorClientes = 0;

    //Constructor
    constructor(nombre,apellido,edad,fechaRegsitro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegsitro = fechaRegsitro;
    }

    //Get y Set method
    get id_cliente(){
        return this._idCliente;
    }
    get fechaRegsitro(){
        return this._fechaRegsitro;
    }
    set fechaRegsitro(fechaRegsitro){
        this._fechaRegsitro = fechaRegsitro;
    }

    //toString
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegsitro}`;
    }
}//CLASS-CLIENTE

//Pruebas de clase persona
let persona1 =  new Persona("Juan","Perez",28);
console.log(persona1.toString());
let persona2 = new Persona("Carlos","Ramirez",35);
console.log(persona2.toString());

//Pruebas de clase empleado
let empleado1 = new Empleado("Karla","Gomez",25,5000);
console.log(empleado1.toString());
let empleado2 = new Empleado("Laura","Quintero",33,7000);
console.log(empleado2.toString());

//Pruebas de clase cliente
let cliente1 = new Cliente("Miguel","Cervantes",30, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Maria","Lara",38,new Date());
console.log(cliente2.toString());