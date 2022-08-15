class Persona{
    //variables estaticas - Atributo de nuestra clase
    //se acceden apartir del nombre de la clase
    static contadorPersonas = 0;
    
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    //metodos get
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    //metodos set
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    //metodo para mandar imprimir
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //Sobreescriendo el metodo de la clase padre(object)
    toString(){
        //Se aplica poliformismo (Multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }
    //metodos estaticos
    static saludar(){
        console.log("Saludos desde método static");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }
}//END CLASS

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido); //llamar el constructor de la clase padre
        this._departamento = departamento;
    }
    //metodos get
    get departamento(){
        return this._departamento;
    }
    //metodos set
    set departamento(departamento){
        this._departamento = departamento; 
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
    }
}//END CLASS

//Definir objetos
let persona1 = new Persona("Juan","perez");
console.log(persona1.toString()); //get nombre

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Karla","Ramirez");
console.log(persona2.toString());

console.log(Persona.contadorPersonas);


