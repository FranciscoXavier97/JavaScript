class Empleado{
    //constructor
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    //Metodos get y set
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
       this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    //metodo obtener detalles
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}//CLASS - Empleado

class Gerente extends Empleado{
    //Constructor
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    //Metodos get y set 
    get departamento(){
        return this.departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //metodo obtener detalles - sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}//CLASS - Gerente

/*
    A esta funcion imprimir se le conoce como Polimorfismo ya que solamente una linea de codigo
    peude ejecutar el metodo de la clase padre o de la clase hija, ya que Polimorfismo siginifica
    multiples formas, en este caso multiples formas de llamar a un metodo de la clase padre o de la
    clase hija 
*/
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado){
        console.log("Es un tipo Empleado");
    }
    else if(tipo instanceof Object){
        console.log("Es un tipo Object");
    }
}


//Test de la clase Empleado 
let E1 = new Empleado("Juan",3000);

//Test de la clase Gerente
let G1 = new Gerente("Francisco","12000","Sistemas");

//Mandamos llamar el metodo imprimir
determinarTipo(E1);
determinarTipo(G1);
