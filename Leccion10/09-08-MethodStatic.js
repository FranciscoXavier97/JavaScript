class Persona{
    //variables estaticas 
    static contadorObjetosPersona = 0;

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
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
        return this._nombre + " " + this._apellido;
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
console.log(persona1); //get nombre

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//no  es posible llamar un metodo static desde un objeto 
//persona1.saludar();


//los metodos estaticos se asocian con nuestra clase y no con nuestros objetos
Persona.saludar();

Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);